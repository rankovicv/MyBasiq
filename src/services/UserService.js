const TransactionList = require("../models/TransactionList");
const UserApi = require("../api/user");

function getUser(userId, session) {
  if (!session) {
    throw new Error("No session provided");
  }

  return UserApi.getUser(userId, session);
}

function getTransactions(userId, session) {
  if (!session) {
    throw new Error("No session provided");
  }

  return new Promise(function (res, rej) {
    return session.getToken().then(function () {
      let url = "users/" + userId + "/transactions";

      session.API.send(url, "GET")
        .then(function (body) {
          res(new TransactionList(body));
        })
        .catch(function (err) {
          rej(err);
        });
    });
  })
}

module.exports = {
  getUser: getUser,
  getTransactions: getTransactions
}