const dotenv = require('dotenv');
const express = require('express');
const routes = require('./routes')
require('./database')
const PORT = process.env.PORT || 3000;

dotenv.config();
const app = express();

app.use(express.json());


app.use(routes);

app.use((req, res) => res.status(404).send('Page not found'));

app.listen(PORT);

// const mysql      = require('mysql2');

// const connection = mysql.createConnection({
//   host     : process.env.MYHOST,
//   port     : process.env.MYPORT,
//   user     : process.env.MYUSER,
//   password : process.env.MYPASSWORD,
//   database : process.env.MYDATABASE
// });

// connection.connect((err) => {
//     if(err) return console.log(err);
//     console.log('conectou!');
//     return;
//   })

// console.log(process.env.MYHOST);