const mongoose = require('mongoose');

const toDoSchema = new mongoose.Schema(
  {
    taskName: 'String',
    priority: 'Number',
    class: 'String',
    creationDate: 'String',
    doneDate: 'String',
    userId: 'String'
  }
);

module.exports = mongoose.model('ToDo', toDoSchema);
