import streamlit as st
import base64
import os

# 地図画像の表示とリンクの追加
def display_map_with_links(image_path, language):
    # 画像を読み込む
    with open(image_path, "rb") as image_file:
        image_base64 = base64.b64encode(image_file.read()).decode()

    # 各言語のツールチップメッセージを定義
    tooltips = {
        'ja': ['ここはパイヌハマビーチです', 'ここはカビラ湾です'],
        'en': ['This is Painuhama Beach', 'This is Kabira Bay']
    }

    # HTMLコードを作成
    html_code = f"""
    <!DOCTYPE html>
    <html lang="{language}">
    <head>
        <meta charset="UTF-8">
        <title>Interactive Map</title>
        <style>
            .map-container {{
                position: relative;
            }}
            .map-link {{
                position: absolute;
                background-color: rgba(0, 0, 255, 0.5);
                border-radius: 50%;
                width: 10px;
                height: 10px;
                transform: translate(-50%, -50%);
            }}
            .tooltip {{
                display: none;
                position: absolute;
                background-color: rgba(0, 0, 0, 0.7);
                color: white;
                padding: 5px;
                border-radius: 5px;
                font-size: 12px;
            }}
        </style>
    </head>
    <body>
        <h1>石垣市の観光地図</h1>
        <div class="map-container">
            <img src="data:image/jpg;base64,{image_base64}" alt="石垣市地図" width="800" >
            <div class="tooltip" id="tooltip1">{tooltips[language][0]}</div>
            <a href="https://www.yahoo.co.jp" class="map-link" style="top: 80%; left: 27%;" 
               onmouseover="showTooltip(event, 'tooltip1')" onmouseout="hideTooltip('tooltip1')"></a>
            <div class="tooltip" id="tooltip2">{tooltips[language][1]}</div>
            <a href="https://www.google.com" class="map-link" style="top: 60%; left: 50%;" 
               onmouseover="showTooltip(event, 'tooltip2')" onmouseout="hideTooltip('tooltip2')"></a>
        </div>
        <script>
            function showTooltip(event, tooltipId) {{
                var tooltip = document.getElementById(tooltipId);
                tooltip.style.display = 'block';
                tooltip.style.left = event.pageX + 'px';
                tooltip.style.top = event.pageY + 'px';
            }}
            function hideTooltip(tooltipId) {{
                var tooltip = document.getElementById(tooltipId);
                tooltip.style.display = 'none';
            }}
        </script>
    </body>
    </html>
    """

    # HTMLコードをStreamlitで表示
    st.components.v1.html(html_code, height=800)

# Streamlitアプリ
st.title('インタラクティブ地図のデモ')

# 言語選択
language = st.selectbox('言語を選択してください / Select language', ['ja', 'en'])

# 画像アップロード
uploaded_file = st.file_uploader("地図画像をアップロードしてください", type=["jpg", "jpeg", "png"])

if uploaded_file is not None:
    # アップロードされた画像を保存
    image_path = "uploaded_image.jpg"
    with open(image_path, "wb") as f:
        f.write(uploaded_file.getbuffer())

    # 地図画像の表示とリンクの追加
    display_map_with_links(image_path, language)