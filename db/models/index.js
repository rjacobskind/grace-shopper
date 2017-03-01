'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

// EI: too much commented-out code on master
const User = require('./user');
const OAuth = require('./oauth');
const Review = require('./review');
const Product = require('./product');
const Order = require('./orders'); // EI: typo
const PurchasedProduct = require('./purchased-products'); // EI: typo
const CartProduct = require('./cart-product');

OAuth.belongsTo(User);
User.hasOne(OAuth);

Review.belongsTo(User);
User.hasMany(Review);

Review.belongsTo(Product);
Product.hasMany(Review);

Order.belongsTo(User);
User.hasMany(Order);

PurchasedProduct.belongsTo(Order);
Order.hasMany(PurchasedProduct);

CartProduct.belongsTo(User);
User.hasMany(CartProduct);

CartProduct.belongsTo(Product);
Product.hasMany(CartProduct);

PurchasedProduct.belongsTo(Product);
Product.hasMany(PurchasedProduct);

module.exports = {
  User,
  Review,
  Product,
  Order,
  PurchasedProduct,
  CartProduct,
};
