const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongooseConnection = require("./config/mongooseConnection.config");

const app = express();

// ==> Rotas da API:
const index = require("./routes/index");
const userRoutes = require("./routes/user.routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: "application/vnd.api+json" }));
app.use(morgan("dev"));
app.use(cors());

// ==> Retornando a conexão via mongoose via external file usando 'app.set()'
app.set("mongoose connection", mongooseConnection);

app.use(index);
app.use("/api/v1/", userRoutes);

// Handle production
if (process.env.NODE_ENV === 'production') {
  // Static folder
  app.use(express.static(__dirname + '/public/'));

  // Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server started on port ${port}`));