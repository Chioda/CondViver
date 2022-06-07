const express = require('express');
const anuncioController = require('../controllers/anuncio.controller');
const router = express.Router();

router.post('/anuncio', anuncioController.registerNewAnuncio);

router.get('/anuncio', anuncioController.returnAnuncio);

router.get('/anuncio/:id', anuncioController.returnAnuncioId);

router.patch('/anuncio/:id', anuncioController.updateAnuncio);

router.delete('/anuncio/:id', anuncioController.deleteAnuncio)  

module.exports = router;