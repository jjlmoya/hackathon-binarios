const router = require('../config').router();
const Commons = require('../services/commons.services');

const mongoose = require('mongoose');
const ConfigDBModels = require('../config-db-models');

let models = ConfigDBModels.createSchemas(mongoose);


module.exports = function (app) {
// getFilm('/pelicula/la-comunidad-del-anillo');

  // app.get('/', function (req, res) {
  //   console.log(Commons.join(corePage));
  //     res.render(corePage.view, Commons.join(corePage));
  // });



  app.get('/hackathon/personajes', function (req, res) {
    let characters = getCharacters().then((result) => {
      console.log(result);

      res.render('pages/hackathon/characters',
        Commons.join(Commons.join({characters: result})));
    });

  });



  // app.get('hackaton/personaje/{character}', function (req, res) {
  //   //getModelPersonaje(character)
  //     res.render(corePage.view, Commons.join(corePage));
  // });
};

getCharacters = function () {
    var query = models.Character.find();

   return query.exec();
}

getCharacter = function (characterUrl) {
    var query = models.Character.findOne({
      'pageUrl': characterUrl,
    });

   return query.exec();
}

getFilms = function () {
    var query = models.Film
    .find()
    .populate('characters');

    return query.exec();
}

getFilm = function (filmUrl) {
    var query = models.Film
    .findOne({
      'pageUrl': filmUrl,
    })
    .populate('characters');

    return query.exec();
}
