from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import os

app = Flask(__name__)
CORS(app)

BOT_TOKEN = "8820960604:AAFxAf8cxPeOBNUOoyUSRhqrMH3CJhz95mU"
CHAT_ID = "-1003967286332"


@app.route("/")
def home():
    return "API Working"


@app.route("/send-lead", methods=["POST"])
def send_lead():

    try:

        data = request.get_json()

        name = data.get("name", "")
        phone = data.get("phone", "")
        service = data.get("service", "")

        message = f"""
🏥 Sri Vinayaka Hospital Lead

👤 Name: {name}
📞 Mobile: {phone}
🩺 Service: {service}
"""

        response = requests.post(
            f"https://api.telegram.org/bot{BOT_TOKEN}/sendMessage",
            json={
                "chat_id": CHAT_ID,
                "text": message
            },
            timeout=20
        )

        return jsonify({
            "success": True,
            "telegram_status": response.status_code
        })

    except Exception as e:

        return jsonify({
            "success": False,
            "error": str(e)
        }), 500


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 10000))
    app.run(host="0.0.0.0", port=port)