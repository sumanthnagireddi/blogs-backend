const express = require("express");
const mongoose = require("mongoose");
const app = express();
const blogRoutes = require("./src/routes/blog.routes");

require("dotenv").config();



const connectDB = require("./connection");

connectDB();

app.use(express.json());
app.use("/blogs", blogRoutes);

app.listen(process.env.PORT, () => {
  console.log(`server listening on port ${process.env.PORT}`);
});

//
