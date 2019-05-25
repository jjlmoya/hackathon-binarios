const mongoose = require('mongoose');
const Config = require('./config');
const express = require('express');

let Place, Character, Film;

mongoose.connect(Config.db().protocol + Config.db().url + Config.db().dbName,
  { useNewUrlParser: true },
  function (err, db) {
    if (err) return done(err);

    createSchemas();

    dropDatabase()
})

createSchemas = function () {
  var placeSchema = new mongoose.Schema({
      name: String,
      extension: Number,
      pageUrl: String,
      theme: String,
  });

  var characterSchema = new mongoose.Schema({
      name: String,
      demographicData: Array,
      placeOfBirth: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Place',
      },
      alive: Boolean,
      imageUrl: String,
      pageUrl: String,
      theme: String,
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
      theme: String,
    });

  Place = mongoose.model('Place', placeSchema);
  Character = mongoose.model('Character', characterSchema);
  Film = mongoose.model('Film', filmSchema);
}

dropDatabase = function () {
  Place.remove({}, function(err) {
   console.log('Places removed');

   Character.remove({}, function(err) {
    console.log('Characters removed');

    Film.remove({}, function(err) {
     console.log('Films removed');

     save1();
    });
   });
  });
}

save1 = function () {
  let doc = new Place({
    name: 'La Comarca',
    extension: 100,
    pageUrl: '/zona/la-comarca',
    theme: 'aviator',
  });

  doc.save((error, result) => save2(error, result));
}

save2 = function (error, laComarca) {
  if (error) return console.error(error);
  var doc = new Character({
    name: 'Frodo Bolsón',
    demographicData: ['Hobbit', 'Bolson', 'PortadorAnillo',],
    placeOfBirth: laComarca.id,
    alive: true,
    imageUrl: 'https://pbs.twimg.com/profile_images/914686805991190528/IgdbIKmV_400x400.jpg',
    pageUrl: '/personaje/frodo-bolson',
    theme: 'diable',
  });

  doc.save((error, result) => save3(error, result));
}

save3 = function (error, result) {
  if (error) return console.error(error);

  let comunidadCharacters = [result];

  var doc = new Character({
    name: 'Boromir',
    demographicData: null,
    placeOfBirth: null,
    alive: true,
    imageUrl: 'https://vignette.wikia.nocookie.net/lotr/images/b/b4/Seanbean_boromir.jpg/revision/latest?cb=20110327195115',
    pageUrl: '/personaje/boromir',
    theme: 'forest',
  });

  doc.save((error, result) => save4(error, result, comunidadCharacters));
}

save4 = function (error, result, comunidadCharacters) {
  if (error) return console.error(error);

  comunidadCharacters.push(result);

  var doc = new Character({
    name: 'Gandalf',
    demographicData: null,
    placeOfBirth: null,
    alive: true,
    imageUrl: 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-the-lord-of-the-rings-ian-mckellen.jpg',
    pageUrl: '/personaje/gandalf',
    theme: 'kino',
  });

  doc.save((error, result) => save5(error, result, comunidadCharacters));
}

save5 = function (error, result, comunidadCharacters) {
  if (error) return console.error(error);

  comunidadCharacters.push(result);
  var doc = new Character({
    name: 'Saruman',
    demographicData: null,
    placeOfBirth: null,
    alive: true,
    imageUrl: 'https://vignette.wikia.nocookie.net/lotr/images/0/0c/Christopher_Lee_as_Saruman.jpg/revision/latest?cb=20170127113833',
    pageUrl: '/personaje/saruman',
    theme: 'lime-sports',
  });

  doc.save((error, result) => save6(error, result, comunidadCharacters));
}

save6 = function (error, result, comunidadCharacters) {
  if (error) return console.error(error);

  comunidadCharacters.push(result);
  var doc = new Character({
    name: 'Galadriel',
    demographicData: null,
    placeOfBirth: null,
    alive: true,
    imageUrl: 'https://vignette.wikia.nocookie.net/lotr/images/0/0c/Christopher_Lee_as_Saruman.jpg/revision/latest?cb=20170127113833',
    pageUrl: '/personaje/galadriel',
    theme: 'lime-sports',
  });

  doc.save((error, result) => save7(error, result, comunidadCharacters));
}


save7 = function (error, bilbo, comunidadCharacters) {
  if (error) return console.error(error);
  var doc = new Film({
    name: 'La Comunidad del Anillo',
    releaseYear: 2001,
    duration: 178,
    storyTimeOrder: 4,
    characters: comunidadCharacters,
    places: null,
    imageUrl: 'http://elanillounico.com/wp-content/uploads/2016/12/ESDLA.-LCDA.jpg',
    pageUrl: '/pelicula/la-comunidad-del-anillo',
    theme: 'lollipop',
  });

  //When last document is saved, close connection
  doc.save(function (error) {
   if (error) return console.error(error);
   console.log('All New Data inserted on DB, closing connection...');
   mongoose.connection.close();
 });
}
