const { AuthenticationError } = require('apollo-server-express');
const { User, Comment, Post } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('posts');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('posts');
    },
    posts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Post.find(params).sort({ createdAt: -1 });
    },
    post: async (parent, { postId }) => {
      return Post.findOne({ _id: postId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('posts');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    getPosts: async () => {
      try {
        const posts = await Post.find().populate('comments').sort({ createdAt: -1 });
        return posts;
      } catch (err) {
        throw new Error(err);
      }
    },    
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addPost: async (parent, { postText }, context) => {
      if (context.user) {
        const post = await Post.create({
          postText,
          postAuthor: context.user.username ?? "Jim",
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { posts: post._id } }
        );

        return post;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    addComment: async (parent, { postId, commentText }, context) => {
      if (context.user) {
        const newComment = await Comment.create({
          commentText: commentText,
          commentAuthor: context.user.username,
        });
        const post = await Post.findOneAndUpdate(
          { _id: postId },
          {
            $addToSet: {
              comments: newComment._id,
            },
          },
          {
            new: true,
            runValidators: true,
          }
        ).populate('comments');
    
        return post;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
      
    updatePost: async (parent, { postId, postText }, context) => {
      if (context.user) {
        const post = await Post.findOneAndUpdate(
          { _id: postId, postAuthor: context.user.username },
          { postText },
          { new: true }
        );

        return post;
      }
      throw new AuthenticationError('You need to be logged in!');
    }, 
    removePost: async (parent, { postId }, context) => {
      if (context.user) {
        const post = await Post.findOneAndDelete({
          _id: postId,
          postAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { posts: post._id } }
        );

        return post;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeComment: async (parent, { postId, commentId }, context) => {
      if (context.user) {
        const comment = await Comment.findById(commentId);
        if (comment.commentAuthor === context.user.username) {
          const post = await Post.findOneAndUpdate(
            { _id: postId },
            { $pull: { comments: commentId } },
            { new: true }
          ).populate('comments');
          await Comment.findByIdAndRemove(commentId);
          return post;
        } else {
          throw new AuthenticationError('You are not authorized to delete this comment');
        }
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;