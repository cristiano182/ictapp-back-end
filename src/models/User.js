const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  userID: { type: Number, required: true },
  foto: { type: String, required: true },
  curso: { type: String, required: true },
  cursoName: { type: String, required: true },
  cargaHoraria: { type: Number, default: 0 },
  date: { type: Date, default: Date.now },
  rank: { type: Number, default: 0 },
  cargaHorariaComplementar: { type: Number, default: 0 },
  horas: { type: Number, default: 0 },
  horasComplementares: { type: Number, default: 0 },
  disciplinasCursadas: [
    {
      name: { type: String, required: true },
      work_load: { type: Number, required: true }
    }
  ]
});
module.exports = mongoose.model("users", UserSchema);
