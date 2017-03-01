'use strict'

const db = require('APP/db');
const Sequelize = require('sequelize');

// EI: stay consistent with the ES6
const Review = db.define('review', {
  content: {
    type: Sequelize.TEXT,
    len: [5, 500],
    allowNull: false
  },
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  },
  rating: {
    type: Sequelize.INTEGER,
    min: 0,
    max: 5
  }
}, {});

module.exports = Review;
