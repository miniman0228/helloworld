from flask import Flask, send_from_directory
from flask_socketio import SocketIO, emit
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)
socketio = SocketIO(app, cors_allowed_origins="*")

frontend_dir = os.path.join(os.path.dirname(__file__), "../frontend")

@app.route("/")
def index():
    return send_from_directory(frontend_dir, "index.html")

@app.route("/<path:filename>")
def static_files(filename):
    return send_from_directory(frontend_dir, filename)

data = {
    "name": "Simon",
    "title": "游戏开发者",
    "description": "这是我的个人网站",
    "skills": ["C#", "Unity", "HTML"],
    "link": "https://github.com/"
}

@socketio.on("connect")
def on_connect():
    emit("user_data", data)

if __name__ == "__main__":
    socketio.run(app, port=5000, debug=True)
