const Transaction = require('../models/Transaction');

const convertToTransaction = function(data) {
  list = []
  for (i = 0; i < data.length; i++) {
    list.push(new Transaction(data[i]))
  }
  return list;
}

module.exports = {
  convertToTransaction: convertToTransaction
}