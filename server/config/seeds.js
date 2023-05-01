const db = require('./connection');
const { User, Comment, Post } = require('../models');

db.once('open', async () => {
  await User.deleteMany();
  await Post.deleteMany();
  await Comment.deleteMany();

  const user1 = await User.create({
    username: 'john_doe',
    email: 'john_doe@example.com',
    password: 'password123',
  });

  const user2 = await User.create({
    username: 'jane_doe',
    email: 'jane_doe@example.com',
    password: 'password456',
  });

  const post1 = await Post.create({
    postText: 'Hello, world!',
    postAuthor: user1.username,
  });

  const post2 = await Post.create({
    postText: 'Testing out Takiwatanga!',
    postAuthor: user2.username,
  });

  const comment1 = await Comment.create({
    commentText: 'Welcome to the site!',
    commentAuthor: user2.username,
  });

  const comment2 = await Comment.create({
    commentText: 'Nice post!',
    commentAuthor: user1.username,
  });

  await Post.findByIdAndUpdate(post1._id, {
    $push: { comments: comment1._id },
  });

  await Post.findByIdAndUpdate(post2._id, {
    $push: { comments: comment2._id },
  });

  await User.findByIdAndUpdate(user2._id, {
    $push: { comments: comment1._id },
  });

  await User.findByIdAndUpdate(user1._id, {
    $push: { comments: comment2._id },
  });

  console.log('Data seeded successfully!');

  process.exit();
});
