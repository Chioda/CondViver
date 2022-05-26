const Anuncio = require("../models/anuncio.model");

// ==> Método responsável por Criar um novo 'User':
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

  
