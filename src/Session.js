const API = require("./helpers/API")

const Session = function (apiKey, apiVersion) {
  if (!this) {
    return new Session(apiKey, apiVersion);
  }

  apiVersion = apiVersion || "1.0";

  let token = null;

  const self = this;

  this.sessionTimestamp = null;

  this.API = new API("https://au-api.basiq.io")
    .setHeader("Authorization", "Basic " + apiKey)
    .setHeader("basiq-version", apiVersion);

  this.expired = function () {
    return Date.now() - self.sessionTimestamp > 1000 * 60 * 60;
  };

  this.getToken = function () {
    if (!self.expired()) {
      return new Promise(function (res) {
        res(true);
      });
    }

    return new Promise(function (res, rej) {
      return self.API.setHeader("Authorization", "Basic " + apiKey)
        .send("token", "POST")
        .then(function (body) {
          self.sessionTimestamp = Date.now();
          token = body.access_token;
          self.API.setHeader("Authorization", "Bearer " + body.access_token);

          res(true);
        })
        .catch(function (err) {
          rej(err);
        });
    });
  };

  return new Promise(function (res, rej) {
    self
      .getToken()
      .then(function () {
        res(self);
      })
      .catch(function (err) {
        rej(err);
      });
  });
}

module.exports = Session;