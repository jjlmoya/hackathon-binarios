var path = require('path');
console.log(__dirname + '/www/public/js/');
module.exports = {
    mode: 'development',
    entry: path.join(__dirname, "/script/apps.js"),
    output: {
        path: __dirname + '/www/public/js/',
        filename: "components.min.js",
    },
};
