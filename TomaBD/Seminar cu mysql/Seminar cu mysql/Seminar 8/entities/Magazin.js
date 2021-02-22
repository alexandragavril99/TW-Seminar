import Sequelize from 'sequelize';
import db from '../dbConfig.js';

const Magazin = db.define("Magazin", {
    MagazinId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull : false
    },

    MagazinName: {
        type: Sequelize.STRING,
        allowNull: false
    },

    MagazinAddress: {
        type: Sequelize.STRING,
        allowNull: false
    },

    MagazinEmployee: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    MagazinPhone: {
        type: Sequelize.STRING,
        allowNull: true
    }
})

export default Magazin;