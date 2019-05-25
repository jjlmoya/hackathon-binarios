const router = require('../config').router();
const Commons = require('../services/commons.services');


module.exports = function (app) {
    router.forEach(function (corePage) {
        app.get(corePage.path, function (req, res) {
            res.render(corePage.view, Commons.join(corePage));
        });
        if (corePage.pages) {
            corePage.pages.forEach(function (page) {
                app.get(corePage.path + page.path, function (req, res) {
                    //BBDD ->
                    res.render(page.view, Commons.join(corePage));
                });
            });
        }
    });
};
