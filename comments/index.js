const express = require('express');
const cors = require('cors');
const { randomBytes } = require('crypto');

const app = express();

const commentsByPostId = {};

app.use(express.json());

app.use(cors());

app.get('/posts/:id/comments', (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

app.post('/posts/:id/comments', (req, res) => {
  const commentId = randomBytes(4).toString('hex');
  const postId = req.params.id;
  const content = req.body.content;
  const comments = commentsByPostId[postId] || [];
  comments.push({ id: commentId, content });
  commentsByPostId[postId] = comments;
  res.status(201).send(comments);
});

app.listen(4001, () => {
  console.log('Listening on 4001.');
});
