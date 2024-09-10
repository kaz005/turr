import os
import base64
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
from googleapiclient.discovery import build

# スコープの設定
SCOPES = ['https://www.googleapis.com/auth/gmail.readonly']

def authenticate_gmail() -> Credentials:
    creds = None
    if os.path.exists('token.json'):
        creds = Credentials.from_authorized_user_file('token.json', SCOPES)
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file('credentials.json', SCOPES)
            creds = flow.run_local_server(port=0)
        with open('token.json', 'w') as token:
            token.write(creds.to_json())
    return creds

def fetch_emails(query: str) -> list:
    creds = authenticate_gmail()
    service = build('gmail', 'v1', credentials=creds)
    results = service.users().messages().list(userId='me', q=query).execute()
    messages = results.get('messages', [])
    
    email_bodies = []
    for message in messages:
        msg = service.users().messages().get(userId='me', id=message['id']).execute()
        if 'data' in msg['payload']['parts'][0]['body']:
            data = msg['payload']['parts'][0]['body']['data']
            decoded_data = base64.urlsafe_b64decode(data).decode('utf-8')
            email_bodies.append(decoded_data)
    
    return email_bodies

if __name__ == "__main__":
    query = "指定した条件"  # ここに条件を指定
    emails = fetch_emails(query)
    for email in emails:
        print(email)