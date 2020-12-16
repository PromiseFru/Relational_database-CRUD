const express = require('express');
const routes = require('./routes/route.js')
const app = express();

app.use(routes);

app.listen(3000, console.log("server started"))