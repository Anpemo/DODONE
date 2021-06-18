const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('app');
const cors = require('cors');

require('dotenv').config();
require('./src/config/ddbb.config');

const todoRouter = require('./src/routes/toDoRouter');
// const userRouter = require('');

const server = express();
const { PORT } = process.env;

server.use(cors());
server.use(morgan('dev'));
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.use('/todo', todoRouter);
// server.use('/user', userRouter);

server.listen(PORT, () => debug(`server is running in port ${PORT}`));
