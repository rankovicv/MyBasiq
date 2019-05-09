const Subclass = require("./Subclass"),
  converter = require("../helpers/converter");

const TransactionList = function ({ data, links }) {
  this.data = converter.convertToTransaction(data);
  this.links = links;

  const self = this;

  this.getAllSubClassInfo = function () {
    const list = [];

    self.data.forEach(function (item) {

      if (item.subClass) {
        var existingSubclass = list.find(function (e) {
          return e.code === item.subClass.code
        })

        if (!existingSubclass) {
          list.push(new Subclass(item))
        } else {
          existingSubclass.countSubclass(parseFloat(item.amount));
        }
      }

    })

    return list;
  };

}

module.exports = TransactionList;