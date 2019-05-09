const Transaction = function(data) {
  this.type = data.type,
  this.id = data.id,
  this.account = data.account,
  this.amount = data.amount,
  this.subClass = data.subClass || []
}

module.exports = Transaction;