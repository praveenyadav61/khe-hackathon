require('dotenv').config({path: './src/env/.env' })
const cors = require("cors");
const express = require('express');
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000
const routes = require('./routes/index')
const app = express();
const uuid = require('uuid')

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes)
app.use(express.static(__dirname + '/views'));
app.set('view engine', 'ejs');

app.listen(PORT, console.log(`Server running on port: ${PORT}`));