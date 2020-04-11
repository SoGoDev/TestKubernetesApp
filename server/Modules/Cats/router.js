const cats = require('express').Router();
const catsController = require('./controler');

cats.get("/cats/groups", catsController.groups);

module.exports = cats;
