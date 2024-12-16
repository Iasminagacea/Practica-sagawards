const db = require('../config/database');
const bcrypt = require('bcrypt');
const User = require('../models/userModel'); // Ensure the correct path to the user model

exports.register = async (req, res) => {
  const { username, password, firstName, lastName, phoneNumber, dateOfBirth, email } = req.body;
  try {
    const hashedPassword = bcrypt.hashSync(password, 10);
    await User.create({
      username,
      password: hashedPassword,
      firstName,
      lastName,
      phoneNumber,
      dateOfBirth,
      email
    });
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Optional: Add email validation method if needed
exports.validateEmail = async (req, res) => {
  const { email } = req.body;
  
  try {
    const existingUser = await db.oneOrNone('SELECT * FROM users WHERE email = $1', [email]);
    
    res.status(200).json({ 
      isUnique: !existingUser 
    });
  } catch (err) {
    console.error('Email validation error:', err);
    res.status(500).json({ 
      message: 'Error validating email', 
      error: err.message 
    });
  }
};