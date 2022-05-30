const mongoose = require('mongoose');
const Anuncio = require("../models/anuncio.model.js");

// ==> Método responsável por Criar um novo 'Anuncio':
exports.registerNewAnuncio = async (req, res) => {
    try {       
      const newAnuncio = new Anuncio(req.body);
      const anuncio = await newAnuncio.save();
      return res
        .status(201)
        .json({ message: "Anuncio criado com sucesso!", anuncio });
    } catch (err) {
      return res.status(400).json({ err });
    }
  };

  exports.returnAnuncio = async (req, res) => {
    try {
      const anuncio = await Anuncio.find()

      res.status(200).json(anuncio)
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  };  
  
  exports.returnAnuncioId = async (req, res) => {
    const id = req.params.id
    try {
      const anuncioId = await Anuncio.findOne({ _id: id })
      if (!anuncioId) {
        res.status(422).json({ message: 'Usuário não encontrado!' })
        return
      }
      res.status(200).json(anuncioId)      
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  };


  exports.updateAnuncio = async (req, res) => {
  const id = req.params.id

  const { title, author, phone, description } = req.body

  const anuncio = {
    title,
    author,
    phone,
    description,
  }

  try {
    const updatedAnuncio = await Anuncio.updateOne({ _id: id }, anuncio)

    if (updatedAnuncio.matchedCount === 0) {
      res.status(422).json({ message: 'Anúncio não encontrado!' })
      return
    }

    res.status(200).json(anuncio)
  } catch (error) {
    res.status(500).json({ erro: error })
  }
};

/* index.js */
exports.deleteAnuncio = async (req, res) => {
  const id = req.params.id

  const anuncio = await Anuncio.findOne({ _id: id })

  if (!anuncio) {
    res.status(422).json({ message: 'Anúncio não encontrado!' })
    return
  }

  try {
    await Anuncio.deleteOne({ _id: id })

    res.status(200).json({ message: 'Anúncio removido com sucesso!' })
  } catch (error) {
    res.status(500).json({ erro: error })
  }
};