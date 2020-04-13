const express = require('express');
const cats = require('../Modules/Cats');
const app = express();


const config = {
  port: 8000
};

app.use("/api/", cats);
app.use(express.static('static'));

app.listen(config.port, () => console.log(`Server start on port ${config.port}`));
