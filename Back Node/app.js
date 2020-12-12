require('dotenv').config();
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');

const express = require('express');
const cors = require('cors');

//Import router;
const typeRouter = require('./routes/type.router');
const userRouter = require('./routes/user.router');
const optionRouter = require('./routes/option.router');
const propertyRouter = require('./routes/property.router');

const app = express();

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

app.use(morgan('combined', { stream: accessLogStream }));

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

// Protect from CORS error
app.use(cors());

app.use('/types', typeRouter);
app.use('/users', userRouter);
app.use('/options', optionRouter);
app.use('/properties', propertyRouter);

app.listen( port, () => {});

module.exports = app;