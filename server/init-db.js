const mongoose = require('mongoose');
const Config = require('./config');
const express = require('express');

let Place, Character, Film;

mongoose.connect(Config.db().protocol + Config.db().url + Config.db().dbName,
  { useNewUrlParser: true },
  function (err, db) {
    if (err) return done(err);

    createSchemas();

    saveLaComarca();
})

createSchemas = function () {
  var placeSchema = new mongoose.Schema({
      name: String,
      extension: Number,
      pageUrl: String,
  });

  var characterSchema = new mongoose.Schema({
      name: String,
      demographicData: Array,
      placeOfBirth: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Place',
      },
      imageUrl: String,
      pageUrl: String,
  });

  var filmSchema = new mongoose.Schema({
      name: String,
      releaseYear: Number,
      duration: Number,
      storyTimeOrder: Number,
      characters: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Character',
      }],
      places: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Place',
      }],
      imageUrl: String,
      pageUrl: String,
    });

  Place = mongoose.model('Place', placeSchema);
  Character = mongoose.model('Character', characterSchema);
  Film = mongoose.model('Film', filmSchema);
}

saveLaComarca = function () {
  let laComarcaPlace = new Place({
    name: 'La Comarca',
    extension: 100,
    pageUrl: '/zona/la-comarca',
  });

  laComarcaPlace.save((error, result) => saveBilbo(error, result));
}

saveBilbo = function (error, laComarca) {
  if (error) return console.error(error);
  var bilboCharacter = new Character({
    name: 'Bilbo',
    demographicData: ['Hobbit', 'Bolson', 'PortadorAnillo',],
    placeOfBirth: laComarca.id,
    imageUrl: 'bilbo',
    pageUrl: '/personaje/bilbo',
  });

  bilboCharacter.save((error, result) => saveElHobbit1(error, result, laComarca.id));

  return bilboCharacter;
}

saveElHobbit1 = function (error, bilbo, laComarcaId) {
  if (error) return console.error(error);
  var elHobbitFilm = new Film({
    name: 'El Hobbit: un viaje insperado',
    releaseYear: 2012,
    duration: 169,
    storyTimeOrder: 1,
    characters: bilbo.id,
    places: [laComarcaId],
    imageUrl: 'el-hobbit-un-viaje-inesperado',
    pageUrl: '/pelicula/el-hobbit-1',
  });

  //When last document is saved, close connection
  elHobbitFilm.save(function (error) {
   if (error) return console.error(error);
   mongoose.connection.close();
 });
}
