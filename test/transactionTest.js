var assert = require('chai').assert;
var testData = require('./test');
var converter = require("../src/helpers/converter");

describe('Transaction', function(){

  it('should return a Transactions created', function() {
    var TransactionsFromList = converter.convertToTransaction(testData.data);

    assert.lengthOf(TransactionsFromList, 11, 'Array contains 11 objects of transaction');
    assert.equal(TransactionsFromList[0].account, '7c7ea992-a216-46b8-a758-806498ae31d2', 'The accounts are not the same');
  })

});