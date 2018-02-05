//since we don't have a database we'll use our front end models at the moment
const express = require('express');
const filmRouter = new express.Router();
var films = require('../client/src/models/films')();
var Film = require('../client/src/models/film');
// var Review = require('../client/src/models/review');



//index
filmRouter.get('/', function(req, res){
  res.json({ data: films});
});

// //create
// filmApp.post('/', function(req, res){
//   films.push(req.body.film);
//   res.json({data: films});
// })


module.exports = filmRouter;
