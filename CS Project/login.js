const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const mysql = require('mysqlite3').verbose();
const fs = require('fs');
const bcrypt = require('bcrypt');

const database_file = 'usersdata.db';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

function initDB(){
    const is_exist = fs.existSync(database_file);
    const database = new sqlite3.Database(database_file);

    if(!is_exist){
        db.serialization(() => {
            db.run(`CREATE TABLE users (
                username TEXT PRIMARY KEY, 
                hasedPW TEXT)`
            );
        })
    }
    return database;
}

const userData = initDB();

function vetData(username) {
    userData.all(`SELECT `)
}

app.post('/login', (req, res) => {
    const username = req.body.username;
    const inputedPW = req.body.password;
    const hased_PW = vetData(username);
    bcrypt.compare(inputedPW, hashed_PW, );
});