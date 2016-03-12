module.exports = (function () {
  var db = require('./mongoose.js');
  var mongoose = require('mongoose');
  var eventSchema = mongoose.Schema({
    name : String,
    id: Number
  });

  var Event = mongoose.model('Event', eventSchema);

  function _add(eventObject) {
    console.log('NewEvent', eventObject);

    return new Event(eventObject).save();
  }

  function _getAll() {
    return Event.find();
  }

  function _deleteEvent(requestId) {
    return Event.find({_id: requestId}).remove().exec();
  }

  function _findEvent(eventName) {
    return Event.findOne({
      "name" : eventName
    });
  }

  return {
    add: _add,
    getAll: _getAll,
    delete: _deleteEvent,
    findEvent: _findEvent
  };
})();