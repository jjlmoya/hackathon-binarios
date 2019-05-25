exports.db = function () {
    return {
        dbName: 'binarios',
        protocol: 'mongodb://',
        url: 'localhost:27017/'
    }
};

exports.brands = [
    'sky'
];

exports.server = function () {
    return {
        port: 3125
    }
};

exports.router = function () {
    return [
        require('./pages/home')
    ]
};
