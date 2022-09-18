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

@app.route('/upload', methods=['POST'])
def upload():
    file=request.files['file']
    if(str(file.filename)!="" and str(file.filename[-3:]) == "pdf"):
        pdf = open(file.filename, 'rb')
        reader=PyPDF2.PdfFileReader(pdf)
        stop_dir = "stop_words.txt"
        rake_object = RAKE.Rake(stop_dir)
        text_in=""
        for i in range(reader.numPages):
            page=reader.getPage(i)
            page_text=page.extractText()
            text_in+=page_text

        response=""
        links="https://github.com"

        keywords=Sort_Tuple(rake_object.run(text_in))
        keys = [i[0] for i in keywords]
        keys = keys[::-1]

        nlp = ["nlp", "tokenization", "token", "stemming", "corpus", "stop words", "words", "text", "pos", "speech", "tag", "ngrams", "sentiment", "nltk"]
        cv = ["vision", "image", "face", "augmentation", "pixels", "rgb", "colors", "ocr", "motion", "camera", "jpeg", "png", "tensorflow"]
        be = ["api", "flask", "aws", "deploy", "host", "database", "django"]
        fe = ["html", "css", "js", "react", "ui", "interface", "server", "client", "post", "get"]
        blockchain = ["encryption", "crypto", "mining", "token", "nodes", "hash", "nonce"]
        prime = 0
        for i in keys:
            if i in nlp:
                response="""Regression
        SVD
        Text processing using NLTK, spaCy
        Computational linguistics and word vectors
        Project - Sentiment detection model using word embeddings
        RNNs for text classification
        sequential modeling
        Transfer learning 
        ULMFit by FastAi
        Project - Using bert and gpt-2 finetuning
        chatbots and audio processing"""
                links="https://towardsdatascience.com/a-complete-exploratory-data-analysis-and-visualization-for-text-data-29fb1b96fb6a"
                prime = 1
                break
            elif i in cv:
                response="""Deep Learning  
        Handwritten Digits Classifier - 
        Object Localization(Find Waldo using OpenCV) - 
        Recognize digits in a Sudoku picture and solve it - 
        Face Recognition and FaceNet - 
        Deploy a model on AWS Sagemaker/Heroku
        """
                links="https://www.coursera.org/learn/neural-networks-deep-learning"
                prime = 1
                break
            elif i in be:
                response="""Learn Python/Javascript
        Learn Flask/Django/Nodejs
        Integrate Flask in a simple Web Application
        Integrate Flask with tensorflow h5 Files and AI models
        Store data in SQL/MongoDB
        Store data from a webapp into AWS S3
        Deploy a model on AWS SageMaker"""
                links="https://www.tutorialspoint.com/flask/index.htm"
                break
                prime = 1
            elif i in fe:
                response="""Learn Python/Javascript
        Learn Flask/Django/Nodejs
        Integrate Flask in a simple Web Application
        Integrate Flask with tensorflow h5 Files and AI models
        Store data in SQL/MongoDB
        Store data from a webapp into AWS S3
        Deploy a model on AWS SageMaker"""
                links="https://www.w3schools.com/react/default.asp"
                prime = 1
                break
            else:
                pass
        if prime == 0:
            response="No pathways available currently."
            links="https://www.tutorialspoint.com/index.htm"
        
        print(response)

        return {'message':response, 'links':links}