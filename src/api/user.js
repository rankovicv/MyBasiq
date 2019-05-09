const User = require("../models/User");

const userAPI = function () {

  this.getUser = async function (id, session) {
    return new Promise(function (res, rej) {
      if (!id) {
        rej(new Error("No id provided for user"));
      }

      return session
        .getToken()
        .then(function () {
          return session.API.send("users/" + id, "GET");
        })
        .then(function (body) {
          res(new User(body));
        })
        .catch(function (err) {
          rej(err);
        });
    });
  }

}

module.exports = new userAPI();