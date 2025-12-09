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

function initUsersDB(){
    const is_exist = fs.existSync(database_file);
    const database = new sqlite3.Database(database_file);

    if(!is_exist){
        database.serialization(() => {
            database.run(`CREATE TABLE users (
                username TEXT PRIMARY KEY, 
                hasedPW TEXT);`
            );
            database.run(`CREATE TABLE scores (
                username TEXT PRIMARY KEY
                score INT 
                FOREIGN KEY (username) REFERENCE users(username)
            );`);
            let adminPW = bcrypt.hash('A2345678x,2(B3456789y)');
            database.run(`INSERT INTO users ('ADMIN', ${adminPW})`);
        })
    }
    return database;
}

const userData = initUsersDB();

function vetPW(username) {
    return userData.get(`SELECT hasedPW FROM users WHERE username = ${username};`, [1], (err,row) => {
        if (err){
            throw err;
        }
        if(!row){
            return null;
        }
    });
}
function handleLogin(err, is_matched, res){
    if (err){
        return res.status(500).json({error : 'error occurred'});
    } else if (!is_matched){
        return res.status(401).json({error : 'invalid input'});
    }
    res.json({
        message : 'succeeded',
        user : username
    });
}
app.post('/login', (req, res) => {
    const username = req.body.username;
    const inputedPW = req.body.password;
    const hased_PW = vetPW(username);
    bcrypt.compare(inputedPW, hashed_PW, handleLogin(err, isMatch, res));
});
app.post('/create', (req, res) => {
    const username = req.body.username;
    const password = bcrypt.hash(req.body.password);
    userData.run(`INSERT INTO users (${username}, ${password});`, (err, row) => {if(err)
            {throw err;}
        res.json({message : 'succeeded'});
});
app.get('/leaderBoard' (req, res) => {
    const username = req.body;
    let results = userData.all(`SELECT username, score, ROW_NUMBER() OVER(ORDER BY score DESC username ASC) AS globalRank FROM scores ORDER BY score DESC, username ASC LIMIT 5;`, [], (err, rows) => {
        if (err){
            throw err;
        }
        if (rows){
            for(let i = 0; i < rows.length; i++){
                if (rows[i].username == username){
                    return ;
                }
            }
            const userResult = userData.get(`SELECT p.username, p.score, p.globalRank FROM (SELECT username, score, ROW_NUMBER() OVER (ORDERED BY score DESC, username ASC) AS globalRank FROM scores) AS p WHERE p.username = ${username};`, [1], (err, row) =>
                if(err){
                throw err;
                }
            );
            results.push(userResult);
            res.json(results);
        }
    });
    
});
