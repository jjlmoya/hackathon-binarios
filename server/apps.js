const Config = require('./config');
const port = Config.server().port;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./db');


app.use(bodyParser.urlencoded({extended: true}));


db.connect(Config.db().protocol + Config.db().url + Config.db().dbName, function (err) {
    if (err) {
        console.log('Unable to connect to Mongo.');
        process.exit(1);
    } else {
        app.listen(port, function () {
            console.log('Example app listening on port ' + port);
        });
    }
});

require('./engine')(app);
require('./router')(app);

