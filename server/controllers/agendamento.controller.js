const mongoose = require('mongoose');
const Agendamento = require("../models/agendamento.model");

// ==> Método responsável por Criar um novo 'Anuncio':
exports.registerNewAgendamento = async (req, res) => {
    try {       
      const newAgendamento = new Agendamento(req.body);
      const agendamento = await newAgendamento.save();
      return res
        .status(201)
        .json({ message: "Agendamento criado com sucesso!", agendamento });
    } catch (err) {
      return res.status(400).json({ err });
    }
  };

  exports.returnAgendamento = async (req, res) => {
    try {
      const agendamento = await Agendamento.find()

      res.status(200).json(agendamento)
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  };  
  
  exports.returnAgendamentoId = async (req, res) => {
    const id = req.params.id
    try {
      const agendamentoId = await Agendamento.findOne({ _id: id })
      if (!agendamentoId) {
        res.status(422).json({ message: 'Agendamento não encontrado!' })
        return
      }
      res.status(200).json(agendamentoId)      
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  };


  exports.updateAgendamento = async (req, res) => {
  const id = req.params.id

  const { title, author, phone, description } = req.body

  const agendamento = {
    title,
    author,
    phone,
    description,
  }

  try {
    const updatedAgendamento = await Agendamento.updateOne({ _id: id }, agendamento)

    if (updatedAgendamento.matchedCount === 0) {
      res.status(422).json({ message: 'Agendamento não encontrado!' })
      return
    }

    res.status(200).json(agendamento)
  } catch (error) {
    res.status(500).json({ erro: error })
  }
};

/* index.js */
exports.deleteAgendamento = async (req, res) => {
  const id = req.params.id

  const agendamento = await Agendamento.findOne({ _id: id })

  if (!agendamento) {
    res.status(422).json({ message: 'Agendamento não encontrado!' })
    return
  }

  try {
    await Agendamento.deleteOne({ _id: id })

    res.status(200).json({ message: 'Agendamento removido com sucesso!' })
  } catch (error) {
    res.status(500).json({ erro: error })
  }
};