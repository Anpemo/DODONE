const express = require('express');

require('dotenv').config();

const { PORT } = process.env;
// Create server
const server = express();

// Define routes
const todoRoutes = express.Routes();

server.use('/todo', routes);

server.listen(PORT, () => debug(`server is running in port ${PORT}`));
