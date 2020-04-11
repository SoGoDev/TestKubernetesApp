const express = require('express');
const cats = require('../Modules/Cats');
const app = express();


const config = {
  port: 8000
};

//app.all('/*', function(req, res, next) {
//  res.header("Access-Control-Allow-Origin", "*");
//  res.header("Access-Control-Allow-Headers", "X-Requested-With");
//  next();
//});

app.use("/api/", cats);
app.use(express.static('static'));

app.listen(config.port, () => console.log(`Server start on ${config.port} port`));
