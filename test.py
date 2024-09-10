import whisper
from googletrans import Translator

def transcribe_and_translate(audio_file: str) -> str:
    # 音声を文字起こし
    model = whisper.load_model("base")
    result = model.transcribe(audio_file)
    english_text = result['text']
    
    # 翻訳
    translator = Translator()
    japanese_text = translator.translate(english_text, src='en', dest='ja').text
    
    return japanese_text

if __name__ == "__main__":
    audio_path = "path/to/your/audio/file.wav"  # 音声ファイルのパスを指定
    translated_text = transcribe_and_translate(audio_path)
    print(translated_text)