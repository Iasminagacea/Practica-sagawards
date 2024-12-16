const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('loginsignup', 'postgres', 'your_password', {
  host: 'localhost',
  dialect: 'postgres',
});

const { DataTypes } = require('sequelize');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'users', // Denumește tabela explicit dacă numele este diferit
  timestamps: false, // Dacă nu ai câmpuri createdAt și updatedAt
});

module.exports = User;
