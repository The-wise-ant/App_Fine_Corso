const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require('cors')
const app = express();


app.use(express.json());
app.use(cors())

const PORT = process.env.PORT || 5500;
const todoItemRoute = require('./routes/todoItems')


mongoose
  .connect(process.env.DB_CONNECT)
  .then(() => console.log("Database connected"));




app.use('/', todoItemRoute)






app.listen(PORT, () => console.log("Server connected"));
