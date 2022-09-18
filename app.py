import os
from flask import Flask,request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/init')
def hello():
    return 'hello world'