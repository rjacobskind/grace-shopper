'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user');
const OAuth = require('./oauth');
const Review = require('./review');
//const Product = require('./product');
//const Order = require('./order');
//const PurchasedProduct = require('./purchased-product');
//const CartProduct = require('./cart-product');

OAuth.belongsTo(User);
User.hasOne(OAuth);

Review.belongsTo(User);
User.hasMany(Review);

Review.belongsTo(Product);
Product.hasMany(Review);

Order.belongsTo(User);
User.hasMany(Order);

Order.hasMany(PurchasedProduct);
PurchasedProduct.hasOne(Order);

User.hasMany(CartProduct);
CartProduct.belongsTo(User);

Product.hasMany(CartProduct);
CartProduct.hasOne(Product);

PurchasedProduct.belongsTo(Product);
Product.hasMany(PurchasedProduct);

module.exports = {
  User,
  Review,
  //Product,
  //Order,
  //PurchasedProduct,
  //CartProduct
};

