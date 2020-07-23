const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const listSchema = new Schema({
  title: String,
  description: String,
  owner: { type: Schema.Types.ObjectId, ref: 'User' },
  tasks: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Task'
    }
  ]
});

const List = mongoose.model('List', listSchema);

module.exports = List;