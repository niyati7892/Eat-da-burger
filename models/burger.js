var orm = require("../config/orm");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burger", function(res) {
            cb(res);
        });
    },
    insertOne: function(column, value, cb) {
        orm.insertOne("burger", column, value, function(res) {
            cb(res);
        });
    },
    updateOne: function (burgerId, cb) {
        orm.updateOne("burger", "devoured", burgerId, function (res) {
          cb(res);
        });
      }
};

module.exports = burger;
