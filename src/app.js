const dotenv = require('dotenv');
const express = require('express');
const routes = require('./routes');
const cors = require('cors');
require('./database')
const PORT = process.env.PORT || 3000;

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.use((req, res) => res.status(404).send('Page not found'));

app.listen(PORT);