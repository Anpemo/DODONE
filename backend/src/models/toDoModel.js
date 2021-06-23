const mongoose = require('mongoose');

const toDoSchema = new mongoose.Schema(
  {
    taskName: 'String',
    priority: 'Number',
    taskGroup: 'String',
    creationDate: 'String',
    expiration: 'String',
    userId: 'String'
  }
);

module.exports = mongoose.model('ToDo', toDoSchema);
