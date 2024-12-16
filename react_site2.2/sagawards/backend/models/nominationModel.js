const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Nomination = sequelize.define('Nomination', {
  year: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false
  },
  full_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  show: {
    type: DataTypes.STRING,
    allowNull: false
  },
  won: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
});

module.exports = Nomination;