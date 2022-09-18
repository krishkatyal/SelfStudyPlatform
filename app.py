import os
from flask import Flask,request
from flask_cors import CORS
import PyPDF2

app = Flask(__name__)
CORS(app)

file = open('test.pdf', 'rb')
reader=PyPDF2.PdfFileReader(file)

text_in=""
for i in range(reader.numPages):
    page=reader.getPage(i)
    page_text=page.extractText()
    text_in+=page_text

@app.route('/init')
def hello():
    return text_in