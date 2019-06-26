const mongoose = require('mongoose');
const Config = require('./config');
const ConfigDBModels = require('./config-db-models');

let models;

mongoose.connect(Config.db().protocol + Config.db().url + Config.db().dbName,
  { useNewUrlParser: true },
  function (err, db) {
    if (err) return done(err);

    models = ConfigDBModels.createSchemas(mongoose);

    dropDatabase();

    saveLaComarca()
      .then((results) => saveCharacters(results))
      .then((results) => saveFilms(results))
      .then(closeConnection);
})

dropDatabase = function () {
  models.Place.deleteMany({}, function(err) {
   console.log('Places removed');

   models.Character.deleteMany({}, function(err) {
    console.log('Characters removed');

    models.Film.deleteMany({}, function(err) {
     console.log('Films removed');
    });
   });
  });
}

saveLaComarca = function () {
  return new models.Place({
    name: 'La Comarca',
    extension: 100,
    pageUrl: '/zona/la-comarca',
    theme: 'aviator',
  }).save();
}

saveCharacters = function (laComarca) {
  return models.Character.insertMany([
    getBilbo(laComarca),
    getGollum(laComarca),
    getBoromir(),
    getGandalf(),
    getSaruman(),
    getGaladriel(),
  ]);
}

getBilbo = function (laComarca) {
  return {
    name: 'Frodo Bolsón',
    demographicData: ['Hobbit', 'Bolson', 'PortadorAnillo',],
    placeOfBirth: laComarca.id,
    alive: true,
    imageUrl: 'https://pbs.twimg.com/profile_images/914686805991190528/IgdbIKmV_400x400.jpg',
    pageUrl: '/personaje/frodo-bolson',
    theme: 'diable',
  };
}

getGollum = function (laComarca) {
  return {
     name: 'Gollum',
     demographicData: null,
     placeOfBirth: laComarca.id,
     alive: true,
     imageUrl: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/main_element/public/media/image/2019/03/gollum.jpg?itok=5IBx_hjL',
     pageUrl: '/hackathon/personaje/gollum',
     theme: 'lollipop',
 };
}

getBoromir = function () {
  return {
    name: 'Boromir',
    demographicData: null,
    placeOfBirth: null,
    alive: true,
    imageUrl: 'https://vignette.wikia.nocookie.net/lotr/images/b/b4/Seanbean_boromir.jpg/revision/latest?cb=20110327195115',
    pageUrl: '/personaje/boromir',
    theme: 'forest',
  };
}

getGandalf = function () {
  return {
    name: 'Gandalf',
    demographicData: null,
    placeOfBirth: null,
    alive: true,
    imageUrl: 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-the-lord-of-the-rings-ian-mckellen.jpg',
    pageUrl: '/personaje/gandalf',
    theme: 'kino',
  };
}

getSaruman = function () {
  return {
    name: 'Saruman',
    demographicData: null,
    placeOfBirth: null,
    alive: true,
    imageUrl: 'https://vignette.wikia.nocookie.net/lotr/images/0/0c/Christopher_Lee_as_Saruman.jpg/revision/latest?cb=20170127113833',
    pageUrl: '/personaje/saruman',
    theme: 'lime-sports',
  };
}

getGaladriel = function () {
  return {
    name: 'Galadriel',
    demographicData: null,
    placeOfBirth: null,
    alive: true,
    imageUrl: 'https://i.pinimg.com/originals/ec/71/72/ec71723b761a3b59d80b84a5bc6f1acc.jpg',
    pageUrl: '/personaje/galadriel',

    theme: 'lollipop',
  };
}

saveFilms = function (characters) {
  return models.Film.insertMany([
    getComunidad(characters),
    getTorres(characters),
    getRetorno(characters)
  ]);
}

getComunidad = function (characters) {
  return {
    name: 'La Comunidad del Anillo',
    releaseYear: 2001,
    duration: 178,
    storyTimeOrder: 4,
    characters: characters,
    places: null,
    imageUrl: 'http://elanillounico.com/wp-content/uploads/2016/12/ESDLA.-LCDA.jpg',
    pageUrl: '/pelicula/la-comunidad-del-anillo',
    theme: 'lollipop',
  };
}

getTorres = function (characters) {
  return {
    name: 'Las Dos Torres',
    releaseYear: 2001,
    duration: 178,
    storyTimeOrder: 4,
    characters: characters,
    places: null,
    imageUrl: 'https://i0.wp.com/elanillounico.com/wp-content/uploads/2015/11/ESDLA.-LDT1.jpg',
    pageUrl: '/pelicula/las-dos-torres',
    theme: 'lollipop',
  };
}

getRetorno = function (characters) {
   return {
     name: 'El Retorno del Rey',
     releaseYear: 2001,
     duration: 178,
     storyTimeOrder: 4,
     characters: characters,
     places: null,
     imageUrl: 'https://i0.wp.com/elanillounico.com/wp-content/uploads/2015/11/ESDLA.-LDT1.jpg',
     pageUrl: '/pelicula/el-retorno-del-rey',
     theme: 'lollipop',
   };
}

closeConnection = function () {
  console.log('All New Data inserted on DB, closing connection...');
  mongoose.connection.close();
}
