const mongoose = require('mongoose');


const { Schema } = mongoose;

const agendamentoSchema = new Schema({
  local: { type: String, maxlength: 50, required: true },
  dia: { type: String, maxlength: 10, required: true },
  horario: { type: String, maxlength: 15, required: true },
  status: { type: String, maxlength: 10, required: true },
  
}, 
{
  timestamps: false,
  collection: 'agendamentos',
  
});

agendamentoSchema.pre('save', async function (next) {  
  
  next();
});

const Agendamento = mongoose.model('Agendamento', agendamentoSchema);

module.exports = Agendamento;