const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const sequelize = require('./util/database');

const monkRoutes = require('./venuemonk routes/venueMonkRoutes.js');

const cors = require('cors');

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(monkRoutes);

sequelize.sync().then(result => {
    console.log(result);
    app.listen(4411);
}).catch(err => console.log(err));

