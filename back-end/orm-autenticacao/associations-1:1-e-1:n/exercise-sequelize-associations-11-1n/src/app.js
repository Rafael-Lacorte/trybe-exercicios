const bodyParser = require('body-parser');
const express = require('express');
const { getAccountById, getAccountByIdLaze} = require('./controller/account.controller');
const { getCommentsByAccountId } = require('./controller/comments.controller');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/accounts/:id', getAccountById);
app.get('/accounts-v2/:id', getAccountByIdLaze);
app.get('/accounts/:id/comments', getCommentsByAccountId);

module.exports = app;
