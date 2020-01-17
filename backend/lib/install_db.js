'use strict'

const conn = require('./connectMongoose');
const mongoose = require('mongoose');
const Product = require('./../models/Product');
const json = require('./../lib/data.json');


conn.once('open', async () =>{
  try {
    console.log('Ahora si que estoy conectado para borrar en MongoDB en:', mongoose.connection.name);
    
    const borrado = await Product.deleteMany({});
    console.log('Se han borrado ' + borrado.deletedCount + ' registros');
    const insertado = await Product.insertMany(json);
    console.log('Se han creado ' + insertado.length + ' registros');
  } catch (error) {
    console.log('Ha ocurrido un error ', error);
    
  }finally {
    conn.close();
    process.exit(0);
}
    
});