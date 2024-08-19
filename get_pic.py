import streamlit as st
import streamlit.components.v1 as components
import base64
import io
from PIL import Image
import pandas as pd

# 地図画像をアップロードするためのUI要素
uploaded_file = st.file_uploader("地図画像をアップロードしてください", type=["jpg", "jpeg"])

if uploaded_file is not None:
    # アップロードされた画像を読み込む
    image = Image.open(uploaded_file)
    
    # 画像をバイト形式に変換し、base64でエンコード
    buffered = io.BytesIO()
    image.save(buffered, format="JPEG")
    encoded = base64.b64encode(buffered.getvalue()).decode('utf-8')
    
    # 地理座標データを持つCSVファイルをアップロードするためのUI要素
    geo_data_file = st.file_uploader("地理座標データ (CSV) をアップロードしてください", type=["csv"])
    
    if geo_data_file is not None:
        # CSVファイルを読み込む
        df = pd.read_csv(geo_data_file)
        
        # HTMLコンポーネントを使用して画像を表示
        html_code = """
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<button onclick="handleClick(event)">クリックして座標を表示</button>
<script>
function handleClick(event) {
    let x = event.clientX; // ここでletを使って変数を定義
    let y = event.clientY; // ここでletを使って変数を定義
    alert(`クリックされた座標: X=${x}, Y=${y}`); 
}
</script>
</body>
</html>
        """
        
        # HTMLコンポーネントを表示
        components.html(html_code, height=600)