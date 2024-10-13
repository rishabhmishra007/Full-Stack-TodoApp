const express = require('express');
const cors = require('cors');
const database = require('./configs/db');
const todoRoutes = require('./routes/todoRoutes');

require('dotenv').config();
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(cors(
    { origin: '*' }
  ));
app.use("/api", todoRoutes);

database.connect();

app.listen(PORT, () => {
    console.log(`Server is runing at ${PORT}`);
})