const User = function (data) {
  this.id = data.id ? data.id : null;
  this.email = data.email ? data.email : null;
  this.mobile = data.mobile ? data.mobile : null;
}

module.exports = User;