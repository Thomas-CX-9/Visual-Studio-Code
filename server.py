import flask

app = flask.Flask(__name__)

@app.route('/')
def _redirect():
    return render_template('index.html')

@app.route('/<url>')
def redirect(url):
    return render_template(f'{url}.html')