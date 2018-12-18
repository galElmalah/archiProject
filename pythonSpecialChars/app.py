from flask import Flask
from flask import request
import json
import re
import sys
app = Flask(__name__)
from flask_cors import CORS
CORS(app)

@app.route('/', methods=['GET', 'POST'])
def hello_world():
    if request.method == 'POST':
        data = json.loads(request.data.decode('utf-8'))
        print(data, file=sys.stderr)
        cleanString = re.sub('\W+','', data['text'] )
        print(cleanString, file=sys.stderr)
        return cleanString

app.run(host='localhost', port=3004)