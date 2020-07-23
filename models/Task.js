const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const taskSchema = new Schema({
  title: String,
  description: String,
  list: [
    {
      type: Schema.Types.ObjectId,
      ref: 'List'
    }
  ]
});

const Task = model('Task', taskSchema);

module.exports = Task;