const Sequelize = require('sequelize');

const sequelize = require('../util/database');


const newsDetails = sequelize.define('newsDetails', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    subtitle:{
        type: Sequelize.STRING,
        allowNull: false
    },
    author_name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    published_date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    readByUser:{
        type:Sequelize.BOOLEAN,
        allowNull:false
    }
});

module.exports = newsDetails;