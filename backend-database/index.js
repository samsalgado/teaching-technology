const express = require("express");
const app = express();
const mysql = require('mysql');
var cors = require('cors');
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
    user: 'root',
    host:'localhost',
    password:'password',
    database:'teaching-technology-db'
});
app.post("/create", (req, res) => {
    const name = req.body.name;
    const cashapp = req.body.cashapp;
    const email = req.body.email;
    const course = req.body.course;
    const btcaddress = req.body.btcaddress;
    
    db.query("INSERT INTO students (name, cashapp, email, course, btcaddress) VALUES(?,?,?,?,?)", [name, cashapp, email,course, btcaddress],
    (err, result) => {
        if(err) {
            console.log(err)
        } else {
            res.send("Values inserted")
        }
    }); 
    
});
app.listen(3001, () => {
    console.log("Server running")
})
