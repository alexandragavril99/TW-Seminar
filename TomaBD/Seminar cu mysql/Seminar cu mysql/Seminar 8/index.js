import express from 'express';
import bodyParser from 'body-parser';
import db from './dbConfig.js';
import Magazin from './entities/Magazin.js';
import mysql from 'mysql2/promise';
import {DB_USERNAME, DB_PASSWORD} from './Const.js';

let app = express();
let router = express.Router();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api', router);

let conn

mysql.createConnection({
    user : DB_USERNAME,
    password : DB_PASSWORD
})
.then((connection) => {
    conn = connection
    return connection.query('CREATE DATABASE IF NOT EXISTS Products')
})
.then(() => {
    return conn.end()
})
.catch((err) => {
    console.warn(err.stack)
})

async function createMagazin(magazin){
    return await Magazin.create(magazin);
}

async function getMagazin(){
    return await Magazin.findAll();
}

async function getMagazinById(id){
    return await Magazin.findByPk(id);
}

async function updateMagazin(id, magazin){
    if (parseInt(id) !== magazin.MagazinId){
        console.log("Entity id diff");
        return;
    }

    let updateEntity = await getMagazinById(id);

    if (!updateEntity){
        console.log("There isn't a magazin with this id");
        return;
    }

    return await updateEntity.update(magazin);
}

async function deleteMagazin(id){
    let deleteEntity = await getMagazinById(id);

    if (!deleteEntity){
        console.log("There isn't a magazin with this id");
        return;
    }

    return await deleteEntity.destroy();
}

router.route('/create').get(async (req, res) => {
    try{
        await db.sync({force : true})    
        res.status(201).json({message : 'created'})
    }
    catch(err){
        console.warn(err.stack)
        res.status(500).json({message : 'server error'})
    }
})

router.route('/magazin').post(async (req, res) => {
    res.json(await createMagazin(req.body));
})

router.route('/magazin').get( async (req, res) => {
    res.json(await getMagazin());
})

router.route('/magazin/:id').get( async (req, res) => {
    res.json(await getMagazinById(req.params.id));
})

router.route('/magazin/:id').put( async (req, res) => {
    res.json(await updateMagazin(req.params.id, req.body));
})

router.route('/magazin/:id').delete( async (req, res) => {
    res.json(await deleteMagazin(req.params.id));
})

let port = process.env.PORT || 8000;
app.listen(port);
console.log("API is running at " + port);