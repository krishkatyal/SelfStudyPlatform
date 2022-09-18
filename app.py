import os
from flask import Flask,request
from flask_cors import CORS
import PyPDF2
import RAKE
import operator

def Sort_Tuple(tup):
    tup.sort(key=lambda x:x[1])
    return tup

app = Flask(__name__)
CORS(app)

file = open('test.pdf', 'rb')
reader=PyPDF2.PdfFileReader(file)
stop_dir = "stop_words.txt"
rake_object = RAKE.Rake(stop_dir)

text_in=""
for i in range(reader.numPages):
    page=reader.getPage(i)
    page_text=page.extractText()
    text_in+=page_text

response=""

keywords=Sort_Tuple(rake_object.run(text_in))
for i in keywords:
    print(i)
    response +=(str(i)+'\n')

@app.route('/init')
def hello():
    return response