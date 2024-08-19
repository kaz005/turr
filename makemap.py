import streamlit as st
import pandas as pd
from PIL import Image

# イメージファイルのアップロード
uploaded_image = st.file_uploader("地図イメージファイルをアップロード", type=["jpg", "jpeg", "png"])

if uploaded_image is not None:
    image = Image.open(uploaded_image)
    st.image(image, caption='アップロードされた地図イメージ', use_column_width=True)

    # CSVファイルのアップロード
    uploaded_csv = st.file_uploader("緯度経度情報を含むCSVファイルをアップロード", type=["csv"])

    if uploaded_csv is not None:
        csv_data = pd.read_csv(uploaded_csv)
        st.write("アップロードされたCSVデータ:", csv_data)

        # ピクセルXY座標に対応する緯度経度情報を取得
        pixel_x = st.number_input("ピクセルX座標を入力", min_value=0, max_value=image.width)
        pixel_y = st.number_input("ピクセルY座標を入力", min_value=0, max_value=image.height)

        if st.button("緯度経度を取得"):
            matching_row = csv_data[(csv_data['pixel_x'] == pixel_x) & (csv_data['pixel_y'] == pixel_y)]
            if not matching_row.empty:
                lat = matching_row['latitude'].values[0]
                lon = matching_row['longitude'].values[0]
                st.write(f"指定したピクセル({pixel_x}, {pixel_y})の緯度経度: 緯度 {lat}, 経度 {lon}")
            else:
                st.write("指定したピクセル位置に対応する緯度経度情報が見つかりませんでした。")