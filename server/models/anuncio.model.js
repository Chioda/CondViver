const mongoose = require('mongoose');

const { Schema } = mongoose;

const anuncioSchema = new Schema({
    title: { type: String, maxlength: 50, required: true },
    author: { type: String, maxlength: 30, required: true },
    description: { type: String, required: true },      
    },   
    {
        timestamps: true,
        collection: 'anuncios',
    });

const Anuncio = mongoose.model('Anuncio', anuncioSchema);

module.exports = Anuncio;