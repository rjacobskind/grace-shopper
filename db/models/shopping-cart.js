const db = require('APP/db');
const Sequelize = require('sequelize');

var ShoppingCart = db.define('shopping-cart', {}, {});

module.exports = ShoppingCart;
