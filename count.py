import streamlit as st

st.title('Counter Example')
if 'count' not in st.session_state: 
	st.session_state.count = 0 #countがsession_stateに追加されていない場合，0で初期化

increment = st.button('Increment')
if increment:
    st.session_state.count += 1 #値の更新

st.write('Count = ' + str(st.session_state.count))