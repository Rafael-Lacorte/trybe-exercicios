const express = require('express');

const cacauTrybe = require('./cacauTrybe');

const app = express();

app.get('/chocolates/total', async (req, res) => {
    const chocolates = await cacauTrybe.getAllChocolates();
    res.status(200).json({ totalChocolates: chocolates.length });
  });

module.exports = app;