const mongoose = require('mongoose');


const { Schema } = mongoose;

const anuncioSchema = new Schema({
  title: { type: String, maxlength: 50, required: true },
  author: { type: String, maxlength: 30, required: true },
  phone: { type: String, maxlength: 15, required: true },
  description: { type: String, maxlength: 300, required: true },
  
}, 
{
  timestamps: true,
  collection: 'anuncios',
  
});

anuncioSchema.pre('save', async function (next) {  
  
  next();
});



const Anuncio = mongoose.model('Anuncio', anuncioSchema);

module.exports = Anuncio;