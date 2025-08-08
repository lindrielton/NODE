


//CRIANDO O MODOLO COM BASE NA NOSSA TABELA DE DADOS


const Sequelize = require('sequelize');
const db = require('../db/conection');




const job = db.define('job', {
    title: {
        type: Sequelize.STRING,
    },
    description:{
        type: Sequelize.STRING,
    },
    salary: {
        type: Sequelize.STRING,
    },
    company: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
    },
    new_job: {
        type: Sequelize.INTEGER,
    }

});

module.exports = job