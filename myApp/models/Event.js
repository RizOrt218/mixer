module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define("Event", {
    name: DataTypes.STRING,
    passcode : DataTypes.STRING
  });
  return Event;
};