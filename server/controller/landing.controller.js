const router = require('../config').router();
const Commons = require('../services/commons.services');


module.exports = function (app) {
    router.forEach(function (corePage) {
        app.get(corePage.path, function (req, res) {
            if (corePage.service) {
                corePage.service().then((result) => {
                    let model = Object.assign({}, corePage, {model: result});
                    console.log('object %o', model);
                    res.render(corePage.view, Commons.join(model));
                });
            } else {
                res.render(corePage.view, Commons.join(corePage));
            }
        });
        if (corePage.pages) {
            corePage.pages.forEach(function (page) {
                app.get(corePage.path + page.path, function (req, res) {
                    if (page.service) {
                        page.service().then((result) => {
                            let model = Object.assign({}, corePage, {model: result});
                            console.log('object %o', model);
                            res.render(page.view, Commons.join(model));
                        });
                    } else {
                        res.render(page.view, Commons.join(corePage));
                    }

                });
            });
        }
    });

};

