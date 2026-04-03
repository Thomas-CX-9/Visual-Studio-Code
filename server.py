import flask
from flask_sqlalchemy import SQLAlchemy

app = flask.Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
db = SQLAlchemy(app)

class user(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String(20), unique = True, nullable = False)
    password = db.Column(db.String(50), nullable = False)
    score = db.Column(db.Integer, nullable = True)

@app.route('/')
def _redirect():
    return render_template('login.html')

@app.route('/api/login', methods  = [['POST']])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    coorespondingUser = db.query(username = username).first()
    storedPW = coorespondingUser[password]
    if storedPW == password:
        return flask.jsonify({}), 200
    else: 
        return flask.jsonify({}), 400

@app.route('/api/register', methods = ['POST'])
def register():
    data = request.get_json
    username = data.get('username')
    password = data.get('password')
    try:
        newID = len(db.query().all())
        newUser = user(id = newID, username = username, password = password, score = None)
        db.add(newUser)
        db.commit()
        return flask.jsonify({}), 201
    except:
        used_username = []
        for u in db.query.all():
            used_username.append(u.username)
        if username in used_username:
            return flask.jsonify({'message': 'repeated username'}), 400
        else:
            return flask.jsonify({'message': 'password should be less than 21 words'}), 400

@app.route('/api/leaderBoard')
def loadLeaderBoard():
    leaderBoard = {}
    order = ['st', 'nd', 'rd', 'f', 'ff']
    top5 = db.query.order_by(db.score.desc(), db.username.desc()).limit(5).all()
    for u in top5:
        leaderBoard[order[top5.index(u)]] = {
            'username': u.username,
            'score': u.score
        }
    return leaderBoard, 200

@app.route('/<url>')
def redirect(url):
    return render_template(f'{url}.html')

