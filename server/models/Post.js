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
      default: "nobody"
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Comment',
      },
    ],
});

const Post = model('Post', postSchema);

module.exports = Post;