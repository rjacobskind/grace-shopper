const User = require('./user');
const Review = require('./review');
const Product = require('./product');
const Order = require('./order');
const PurchasedProduct = require('./purchased-product');
const ShoppingCart = require('./shopping-cart');
const CartProduct = require('./cart-product');


Review.belongsTo(User);
User.hasMany(Review);

Review.belongsTo(Product);
Product.hasMany(Review);

Order.belongsTo(User);
User.hasMany(Order);

Order.hasMany(PurchasedProduct);
PurchasedProduct.hasOne(Order);

User.hasOne(ShoppingCart);
ShoppingCart.belongsTo(User);

ShoppingCart.hasMany(CartProduct);
CartProduct.belongsTo(ShoppingCart);

Product.hasMany(CartProduct);
CartProduct.hasOne(Product);

module.exports = {
  User,
  Review,
  Product,
  Order,
  PurchasedProduct,
  ShoppingCart,
  CartProduct
};
