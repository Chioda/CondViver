const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongooseConnection = require("./config/mongooseConnection.config");
const methodOverride = require('method-override');

const app = express();

const userRoutes = require("./routes/user.routes");
const anuncioRouter = require('./routes/anuncio.router');
const agendamentoRouter = require('./routes/agendamento.router')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: "application/vnd.api+json" }));
app.use(morgan("dev"));
app.use(cors());
app.use(methodOverride('_method'));

app.set("mongoose connection", mongooseConnection);

app.use("/api/v1/", userRoutes);
app.use("/api/v1/", anuncioRouter);
app.use("/api/v1/", agendamentoRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + '/public/')); 
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server started on port ${port}`));