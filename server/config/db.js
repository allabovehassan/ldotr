const { connect } = require("mongoose");
require("dotenv").config();

const connection = connect(process.env.mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = connection;
