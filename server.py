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

with app.app_context():
    db.create_all()

@app.route('/')
def _redirect():
    return flask.render_template('login.html')

@app.route('/api/login', methods  = ['POST']])
def login():
    data = flask.request.get_json()
    username = data.get('username')
    password = data.get('password')
    coorespondingUser = user.query.filter_by(username = username).first()
    if coorespondingUser.password and coorespondingUser.password == password:
        return flask.jsonify({}), 200
    else: 
        return flask.jsonify({}), 400

@app.route('/api/register', methods = ['POST'])
def register():
    data = flask.request.get_json()
    username = data.get('username')
    password = data.get('password')
    try:
        newUser = user(username = username, password = password, score = None)
        db.session.add(newUser)
        db.session.commit()
        return flask.jsonify({}), 201
    except:
        if len(username) > 20:
            return flask.jsonify({'message': 'password should be less than 21 words'}), 400
        else:
            return flask.jsonify({'message': 'repeated username'}), 400

@app.route('/api/leaderBoard', methods = ['GET'])
def loadLeaderBoard():
    leaderBoard = {}
    order = ['st', 'nd', 'rd', 'f', 'ff']
    top5 = user.query.order_by(user.score.desc(), user.username.desc()).limit(5).all()
    for u in top5:
        leaderBoard[order[top5.index(u)]] = {
            'username': u.username,
            'score': u.score
        }
    return flask.jsonify(leaderBoard), 200

@app.route('/api/updateScore', methods = ['POST'])
def updateScore():
    data = flask.request.get_json()
    username = data.get('username')
    score = data.get('score')
    highestScore = user.query.filter_by(username = username).first().score
    if highestScore and highestScore < score:
        user.query.filter_by(username = username).first().score = score
        db.session.commit()

@app.route('/page/<url>')
def redirect(url):
    return flask.render_template(f'{url}.html')