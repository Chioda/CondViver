const express = require('express');
const mongodb = require('mongodb');
const mongoose = require('mongoose');

const router = express.Router();

mongoose.Promise = global.Promise;
// Get Posts
router.get('/', async (req, res) => {
  const posts = await loadPostsCollection();
  res.send(await posts.find({}).toArray());
});

// Add Post
router.post('/', async (req, res) => {
  const posts = await loadPostsCollection();
  await posts.insertOne({
    text: req.body.text,
    createdAt: new Date()
  });
  res.status(201).send();
});

// Delete Post
router.delete('/:id', async (req, res) => {
  const posts = await loadPostsCollection();
  await posts.deleteOne({ _id: new mongodb.ObjectId(req.params.id) });
  res.status(200).send({});
});

async function loadPostsCollection() {
  const client = await mongoose.connect(
    'mongodb+srv://viverdb:301085@viver01.1owne.mongodb.net/',
    {
      useNewUrlParser: true
    }
  ).then(() => {
    console.log('A Base de Dados foi conectada com sucesso!');
  }, (err) => {
    console.log(`Erro ao conectar com a Base de Dados...: ${err}`);
    process.exit();
  });

  return client.db('vue_express').collection('posts');
}

module.exports = router;