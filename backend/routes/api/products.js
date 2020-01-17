'use strict'

const express = require('express');
const router = express.Router();
const Product = require('./../../models/Product')
const { query, param, body } = require('express-validator');
const ItemCtrl = require('../../controllers/api/products');


router.get('/', async (req, res, next) =>{
try {
    const name = req.query.name;
    const manufacturer = req.query.manufacturer;
    const description = req.query.description;
    const color = req.query.color;
    const price = req.query.price;
    const screen = req.query.screen;
    const processor = req.query.processor;
    const ram = req.query.ram;
    const limit = parseInt(req.query.limit);
    const skip = parseInt(req.query.skip);
    const sort = req.query.sort;

    const filter = {};

    if(name){
        filter.name = new RegExp('^' + req.query.name, "i"); //El "i" es para que sea insensible a mayusculas/minusculas
    }


    if(color){
        filter.color = color;
    }

    if(manufacturer){
        filter.tags = manufacturer;
    }

const products = await Product.list({filter, skip, limit, sort});
console.log(products)
res.json({results: products});

} catch (err) {
    next(err);
    
}
});




router.get('/detail/:id', [
    param('id').matches(/^[0-9a-fA-F]{24}$/).withMessage('presenta un formato incorrecto'),
], ItemCtrl.selectOne);

module.exports = router;