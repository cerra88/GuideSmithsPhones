'use strict'

const conn = require('./connectMongoose');
const mongoose = require('mongoose');
const Product = require('./../models/Product');
const json = require('./../lib/data.json');


conn.once('open', async () =>{
    console.log('Conectado en:', mongoose.connection.name, 'para actualización de la BD');
    
    const borrado = await Product.deleteMany({});
    const insertado = await Product.insertMany(json);
    process.exit();
});



