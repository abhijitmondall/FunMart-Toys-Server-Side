const express = require('express');
const cors = require('cors');

const toyRouter = require('./routes/toyRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/toys', toyRouter);

module.exports = app;
