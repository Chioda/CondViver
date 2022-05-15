const mongoose = require('mongoose');

// ==> Importar o arquivo: 'db.config.js'
mongoose.Promise = global.Promise;

// ==> Conexão Base de Dados:
mongoose.connect('mongodb+srv://viverdb:301085@viver01.1owne.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
 }).then(() => {
  console.log('A Base de Dados foi conectada com sucesso!');
}, (err) => {
  console.log(`Erro ao conectar com a Base de Dados...: ${err}`);
  process.exit();
});
