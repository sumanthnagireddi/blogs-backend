const express = require("express");
const mongoose = require("mongoose");
const app = express();
const blogRoutes = require("./src/routes/blog.routes");
mongoose
  .connect("mongodb://localhost:27017/store", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to mongo"))
  .catch((err) => {
    "connection error"; 
  });
app.use(express.json());
app.use("/blogs", blogRoutes);

app.listen(3000, () => {
  console.log("server listening on port 3000");
});
