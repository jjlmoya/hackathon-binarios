const _ = require('lodash');
const brands = require('../config').brands;
const router = require('../config').router();

exports.read = function (config) {
    return new Promise(function (resolve) {
            resolve({
                activePageSlug: config.path,
                layout: config.layout ? config.layout : 'main',
                brands: brands,
                router: router
            });
        }
    );
};

exports.join = function (values) {
    let model = {
        brands: brands,
        router: router
    };
    if (typeof values !== 'array') {
        values = [values];
    }
    _.forEach(values, function (value) {
        Object.assign(model, model, value)
    });
    return model;
};

exports.getPromises = function (page) {
    return _.map(page.services.read, service => {
        return service();
    });
};