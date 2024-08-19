import streamlit as st
import base64
import json
import asyncio
import websockets
from threading import Thread
from multiprocessing import Process, Queue
import socket
import time
import os

# 初期化
if 'click_positions' not in st.session_state:
    st.session_state.click_positions = []

# 利用可能なポートを動的に取得
def get_free_port():
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.bind(('', 0))
        return s.getsockname()[1]

port = get_free_port()

def websocket_handler(q, port):
    async def handler(websocket, path):
        async for message in websocket:
            positions = json.loads(message)
            q.put(positions)
            await websocket.send(json.dumps({'status': 'success'}))

    async def start_server():
        server = await websockets.serve(handler, "localhost", port)
        await server.wait_closed()

    asyncio.run(start_server())

# サブプロセスでWebSocketサーバーを実行
q = Queue()
p = Process(target=websocket_handler, args=(q, port))
p.start()

# WebSocketサーバーが起動するのを待つ
time.sleep(1)

# Streamlitアプリ
st.title('インタラクティブ地図のデモ')

# 画像アップロード
uploaded_file = st.file_uploader("地図画像をアップロードしてください", type=["jpg", "jpeg", "png"])

if uploaded_file is not None:
    # 画像を保存
    image_path = os.path.join(st.experimental_get_query_params().get('path', [''])[0], uploaded_file.name)
    with open(image_path, "wb") as f:
        f.write(uploaded_file.getbuffer())

    # 画像を読み込む
    with open(image_path, "rb") as image_file:
        image_base64 = base64.b64encode(image_file.read()).decode()

    # HTMLとJavaScriptコードを作成
    html_code = f"""
    <div style="position: relative; cursor: crosshair;">
        <img src="data:image/jpg;base64,{image_base64}" id="mapImage" style="width: 800px;">
    </div>
    <script>
        const mapImage = document.getElementById("mapImage");
        const ws = new WebSocket("ws://localhost:{port}");
        ws.onopen = function() {{
            console.log("WebSocket接続が確立されました");
        }};
        ws.onerror = function(error) {{
            console.log("WebSocketエラー: ", error);
        }};
        ws.onclose = function() {{
            console.log("WebSocket接続が閉じられました");
        }};
        mapImage.addEventListener("click", function(event) {{
            const rect = mapImage.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            const positions = {{'x': x, 'y': y}};
            console.log("JavaScriptから送信された座標: X座標: " + x + ", Y座標: " + y);
            ws.send(JSON.stringify(positions));
            ws.onmessage = function(event) {{
                console.log("Pythonからの応答: ", event.data);
            }};
        }});
    </script>
    """

    # HTMLコードをStreamlitで表示
    st.components.v1.html(html_code, height=800)

# WebSocketからのメッセージを処理
while not q.empty():
    positions = q.get()
    st.session_state.click_positions.append({'x': positions['x'], 'y': positions['y']})
    st.experimental_rerun()

# クリック位置の表示
st.header("クリック位置")
for pos in st.session_state.click_positions:
    st.write(f"X座標: {pos['x']}, Y座標: {pos['y']}")

# アプリ終了時にサーバーを停止
def stop_server():
    p.terminate()

import atexit
atexit.register(stop_server)