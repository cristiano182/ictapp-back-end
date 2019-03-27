const mongoose = require("mongoose");

const { Schema } = mongoose;

const PostSchema = new Schema({
  texto: { type: String, required: true },
  date: { type: Date, default: Date.now },
  campus: { type: String, required: true },
  quantidade_comentarios: { type: Number, default: 0 },
  comentarios: [
    {
      texto: { type: String, require: true },
      autor: { type: String, required: true },
      date: { type: Date, default: Date.now },
      foto: { type: String }, 
      like: {
        quantidade:{ type: Number, default: 0 },
        users:[
            {
            id:{type: String}
            }
    ]
      }
    }
  ]
});
module.exports = mongoose.model("posts", PostSchema);
