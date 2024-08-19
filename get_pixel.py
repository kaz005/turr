import streamlit as st
import streamlit.components.v1 as components
import base64
import io
from PIL import Image

# 地図画像をアップロードするためのUI要素
uploaded_file = st.file_uploader("地図画像をアップロードしてください", type=["jpg", "jpeg"])

if uploaded_file is not None:
    # アップロードされた画像を読み込む
    image = Image.open(uploaded_file)
    
    # 画像をバイト形式に変換し、base64でエンコード
    buffered = io.BytesIO()
    image.save(buffered, format="JPEG")
    encoded = base64.b64encode(buffered.getvalue()).decode('utf-8')
    
    # HTMLコンポーネントを使用して画像を表示
    html_code = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <title>Map with Click Event</title>
    </head>
    <body>
        <img src="data:image/jpeg;base64,{encoded}" alt="Map" id="map-image" style="width: 100%; height: auto;">
        <script>
            document.getElementById('map-image').addEventListener('click', function(event) {{
                const x = event.clientX;
                const y = event.clientY;
                console.log('Clicked at coordinates:', [x, y]);
                alert(`クリックされました: (${{x}}, ${{y}})`);
            }});
        </script>
    </body>
    </html>
    """
    
    components.html(html_code, height=500)
