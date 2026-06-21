from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

BOT_TOKEN = "8820960604:AAFxAf8cxPeOBNUOoyUSRhqrMH3CJhz95mU"
CHAT_ID = "-1003967286332"

@app.route("/send-lead", methods=["POST"])
def send_lead():

    data = request.json

    name = data.get("name", "")
    phone = data.get("phone", "")
    service = data.get("service", "")

    message = f"""
🏥 Sri Vinayaka Hospital Lead

👤 Name: {name}
📞 Mobile: {phone}
🩺 Service: {service}
"""

    requests.post(
        f"https://api.telegram.org/bot{BOT_TOKEN}/sendMessage",
        json={
            "chat_id": CHAT_ID,
            "text": message
        }
    )

    return jsonify({"success": True})


@app.route("/")
def home():
    return "API Working"

    
if __name__ == "__main__":
    app.run()