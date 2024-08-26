# test.py
from pyannote.audio import Pipeline
import os

# 環境変数からトークンを取得
token = os.getenv('HUGGINGFACEHUB_API_TOKEN')
pipeline = Pipeline.from_pretrained('pyannote/speaker-diarization', use_auth_token=token)

# Ensure the model is correctly loaded
if pipeline is None:
    raise ValueError("Failed to load the speaker diarization model. Check your authentication token and model availability.")

diarization = pipeline("audio.wav")