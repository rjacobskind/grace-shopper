const db = require('APP/db');
const Sequelize = require('sequelize');

var Review = db.define('review', {
  content: {
    type: Sequelize.TEXT,
    len: [5, 500],
    allowNull: false
  },
  date: {
    type: Sequelize.DATE,
    defaultValue: Date()
  },
  rating: {
    type: Sequelize.INTEGER,
    min: 0,
    max: 5
  }
}, {});

module.exports = Review;
