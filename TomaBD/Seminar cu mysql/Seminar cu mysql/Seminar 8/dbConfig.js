import Sequelize from 'sequelize';
import {DB_USERNAME, DB_PASSWORD} from './Const.js';

const db = new Sequelize({
    dialect: 'mysql',
    database: 'Products',
    username: DB_USERNAME,  
    password: DB_PASSWORD,
    logging: false,
    define: {
        timestamps: false,
        freezeTableName: true
    }
})

export default db;