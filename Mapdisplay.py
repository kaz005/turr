import streamlit as st
import base64
import os

# 地図画像の表示とリンクの追加
def display_map_with_links(image_path):
    # 画像を読み込む
    with open(image_path, "rb") as image_file:
        image_base64 = base64.b64encode(image_file.read()).decode()

    # HTMLコードを作成
    html_code = f"""
    <!DOCTYPE html>
    <html lang="ja">
    <head>
        <meta charset="UTF-8">
        <title>インタラクティブマップ</title>
        <style>
            .map-container {{
                position: relative;
            }}
            .map-link {{
                position: absolute;
                background-color: rgba(0, 0, 255, 0.5);
                border-radius: 50%;
                width: 40px;
                height: 40px;
                transform: translate(-50%, -50%);
            }}
        </style>
    </head>
    <body>
        <h1>石垣市の観光地図</h1>
        <div class="map-container">
            <img src="data:image/jpg;base64,{image_base64}" alt="石垣市地図" width="800">
            <!-- ミナミヌハマビーチ -->
            <a href="https://www.yahoo.co.jp" class="map-link" style="top: 85%; left: 25%;" title="パイヌハマビーチ"></a>
        </div>
    </body>
    </html>
    """

    # HTMLコードをStreamlitで表示
    st.components.v1.html(html_code, height=800)

# Streamlitアプリ
st.title('インタラクティブ地図のデモ')

# 画像アップロード
uploaded_file = st.file_uploader("地図画像をアップロードしてください", type=["jpg", "jpeg", "png"])

if uploaded_file is not None:
    # アップロードされた画像を保存
    image_path = "uploaded_image.jpg"
    with open(image_path, "wb") as f:
        f.write(uploaded_file.getbuffer())

    # 地図画像の表示とリンクの追加
    display_map_with_links(image_path)