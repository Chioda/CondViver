
const express = require('express');
const anuncioController = require('../controllers/anuncio.controller');
const router = express.Router();






//route that handles new post
router.post('/anuncio', anuncioController.registerNewAnuncio);

  

// route that handles edit view
/*router.get('/anuncio/edit/:id', async (request, response) => {
  let anuncio = await Anuncio.findById(request.params.id);
  response.render('anuncio/edit', { anuncio: anuncio });
});

//route to handle updates
router.put('/anuncio:id', async (request, response) => {
  request.anuncio = await Anuncio.findById(request.params.id);
  let anuncio = request.anuncio;
  anuncio.title = request.body.title;
  anuncio.author = request.body.author;
  anuncio.description = request.body.description;

  try {
    anuncio = await anuncio.save();
    //redirect to the view route
    response.redirect(`/anuncios/${anuncio.slug}`);
  } catch (error) {
    console.log(error);
    response.redirect(`/anuncios/edit/${anuncio.id}`, { anuncio: anuncio });
  }
});

///route to handle delete
router.delete('/anuncio:id', async (request, response) => {
  await Anuncio.findByIdAndDelete(request.params.id);
  response.redirect('/anuncio');
});*/

module.exports = router;