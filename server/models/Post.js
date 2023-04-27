const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema({
    postText: {
      type: String,
      required: 'Write your Post here!',
      minlength: 1,
      maxlength: 500,
      trim: true,
    },
    postAuthor: {
      type: String,
      required: true,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
});

const Post = model('Post', postSchema);

module.exports = Post;