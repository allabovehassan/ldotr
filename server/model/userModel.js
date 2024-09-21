const { model, Schema } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    age: {
      type: Number,
      required: true
    }
  },
  {
    versionKey: false,
    timestamps: true,
    strict: true
  }
);

const User = model("user", userSchema);

module.exports = User;
