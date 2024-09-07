const mongoose = require("mongoose")
const { type } = require("os")
const shortid = requier("shortid")
const Schema = mongoose.Schema

const Url = new Schema(
  {
    url: {
      type: String,
      required: true,
    },
    shorturl: {
      type: String,
      required: true,
      default: shortid.generate,
    },
    count: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Url" , Url)