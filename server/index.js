const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongooseConnection = require("./config/mongooseConnection.config");


const app = express();

const index = require("./routes/index");
const userRoutes = require("./routes/user.routes");

// Middleware
app.use(bodyParser.json());
app.use(cors());

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