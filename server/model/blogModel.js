const { model, Schema } = require("mongoose");

const blogSchema = new Schema(
  {
    title: String,
    content: String,
    author: String
  },
  {
    versionKey: false,
    timestamps: true,
    strict: true
  }
);

const Blog = model("blog", blogSchema);
module.exports = Blog
