const router = require('../config').router();
const Commons = require('../services/commons.services');

const mongoose = require('mongoose');
const ConfigDBModels = require('../config-db-models');

let models = ConfigDBModels.createSchemas(mongoose);;


module.exports = function (app) {
    router.forEach(function (corePage) {
        app.get(corePage.path, function (req, res) {
            res.render(corePage.view, Commons.join(corePage));
        });
        if (corePage.pages) {
            corePage.pages.forEach(function (page) {
                app.get(corePage.path + page.path, function (req, res) {
                    res.render(page.view, Commons.join(corePage));
                });
            });
        }

        app.get('hackaton/personajes', function (req, res) {
          //getModeloPersonajes
            res.render(corePage.view, Commons.join(corePage));
        });

        app.get('hackaton/personaje/{character}', function (req, res) {
          //getModelPersonaje(character)
            res.render(corePage.view, Commons.join(corePage));
        });
    });
};

getCharacters = function () {
    var query = models.Character.find();

    query.exec(function (error, result) {
     if (error) return console.error(error);
     return result;
   });
}

getCharacter = function (characterUrl) {
    var query = models.Character.findOne({
      'pageUrl': characterUrl,
    });

    query.exec(function (error, result) {
     if (error) return console.error(error);
     return result;
   });
}

getFilms = function () {
    var query = models.Film
    .find()
    .populate('characters');

    query.exec(function (error, result) {
     if (error) return console.error(error);
     return result;
   });
}

getFilm = function (filmUrl) {
    var query = models.Film
    .findOne({
      'pageUrl': filmUrl,
    })
    .populate('characters');

    query.exec(function (error, result) {
     if (error) return console.error(error);
     return result;
   });
}
