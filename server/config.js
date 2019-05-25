exports.db = function () {
    return {
        dbName: 'mocking',
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
        {
            path: '/',
            view: 'pages/index',
            layout: 'index',
            brand: 'purple-skies',
            name: 'Spoiler Free',
            logo: 'https://i.pinimg.com/originals/f6/c6/08/f6c6083e49a284ec558ef7380391006f.png',
        },
        require('./pages/home')
    ]
};
