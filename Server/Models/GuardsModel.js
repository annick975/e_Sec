const mongoose = require("mongoose");

const GuardsSchema = new mongoose.Schema({
  Fullname: String,
  Username: String,
  Email: String,
  Password: String,
});

const GuardsModel = mongoose.model("Guards", GuardsSchema);
module.exports = GuardsModel;
