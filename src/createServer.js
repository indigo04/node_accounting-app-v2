'use strict';

const { resetUsers } = require('./services/users.service.js');
const { resetExpenses } = require('./services/expenses.servise.js');
const { userRouter } = require('./routes/users.route');
const { expenseRoute } = require('./routes/expenses.route');

const express = require('express');
const cors = require('cors');

function createServer() {
  const app = express();

  resetUsers();
  resetExpenses();

  app.use(cors());
  app.use(express.json());

  app.get('/', (req, res) => {
    res.send('Node js accounting!');
  });

  app.use('/users', userRouter);
  app.use('/expenses', expenseRoute);

  return app;
}

module.exports = {
  createServer,
};
