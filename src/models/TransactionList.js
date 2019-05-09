const Subclass = require("./Subclass"),
 converter = require("../helpers/converter");

const TransactionList = function ({ data, links }) {
  this.data = converter.convertToTransaction(data);
  this.links = links;

  const self = this;

  this.getAllSubClassInfo = function () {
    const list = [];

    for (i = 0; i < self.data.length; i++) {

      if (self.data[i].subClass) {
        var existingSubclass = list.find(function (e) {
          return e.code === self.data[i].subClass.code
        })

        if (!existingSubclass) {
          list.push(new Subclass(self.data[i]))
        } else {
          existingSubclass.countSubclass(parseFloat(self.data[i].amount));
        }
      }
    }

    return list;
  };

}

module.exports = TransactionList;