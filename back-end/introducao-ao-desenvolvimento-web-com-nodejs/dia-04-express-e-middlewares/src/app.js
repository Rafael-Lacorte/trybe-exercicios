const express = require('express');
const ValidatecreatedAt = require('./middlewares/ValidatecreatedAt');
const ValidateDescription = require('./middlewares/ValidateDescription');
const ValidateDifficulty = require('./middlewares/ValidateDifficulty');
const validateName = require('./middlewares/ValidateName')
const validatePrice = require('./middlewares/ValidatePrice');
const ValidateRating = require('./middlewares/ValidateRating');
const ValidateSignupFields = require('./middlewares/ValidateSignupFields');

const crypto = require('crypto');
const ValidateAuthentication = require('./middlewares/ValidateAuthentication');

function generateToken() {
  return crypto.randomBytes(8).toString('hex');
}

const app = express();

app.use(express.json())

app.post('/activities', 
validateName,
validatePrice,
ValidateDescription,
ValidatecreatedAt,
ValidateRating,
ValidateDifficulty,
ValidateAuthentication,
 (_req, res) => {
    res.status(201).json({ message: 'Atividade registrada com sucesso' })
})

app.post('/signup', ValidateSignupFields, (_req, res) => {
    res.status(200).json({ token: generateToken() })
})

module.exports = app;