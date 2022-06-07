const express = require('express');
const agendamentoController = require('../controllers/agendamento.controller');
const router = express.Router();

router.post('/agendamento', agendamentoController.registerNewAgendamento);

router.get('/agendamento', agendamentoController.returnAgendamento);

router.get('/agendamento/:id', agendamentoController.returnAgendamentoId);

router.patch('/agendamento/:id', agendamentoController.updateAgendamento);

router.delete('/agendamento/:id', agendamentoController.deleteAgendamento)
  
module.exports = router;