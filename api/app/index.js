const express = require('express')
const app = express()

// Set up body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Set up cors
const cors = require('cors');
app.use(cors());

const commands = require('./routes/commands.js')
app.use('/api/commands', commands)

module.exports = app
