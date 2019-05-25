const mongoose = require('mongoose');
const ConfigDBModels = require('../config-db-models');

let models = ConfigDBModels.createSchemas(mongoose);


let getCharacters = function () {
        var query = models.Character.find();
        return query.exec();
    },

    getCharacter = function (characterUrl) {
        var query = models.Character.findOne({
            'pageUrl': characterUrl,
        });

        return query.exec();
    },

    getFilms = function () {
        var query = models.Film
            .find()
            .populate('characters');

        return query.exec();
    },

    getFilm = function (filmUrl) {
        var query = models.Film
            .findOne({
                'pageUrl': filmUrl,
            })
            .populate('characters');

        return query.exec();
    };

module.exports = {
    path: '/hackathon/',
    view: 'pages/hackathon/index',
    layout: 'main',
    brand: 'purple-skies',
    name: 'Spoiler Free',
    service: getFilms,
    logo: 'https://i.pinimg.com/originals/f6/c6/08/f6c6083e49a284ec558ef7380391006f.png',
    pages: [
        {
            path: 'personajes',
            view: 'pages/hackathon/characters',
            layout: 'main',
            name: 'Personajes',
            service: getCharacters
        },
        {
            path: 'personaje/gollum',
            view: 'pages/hackathon/gollum',
            layout: 'main',
            name: 'Gollum',
        }
    ],
};
