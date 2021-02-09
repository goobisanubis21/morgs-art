const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paintingSchema = new Schema({
    title: { type: String },
    image: { type: String },
    size: { type: String },
    description: { type: String },
    price: { type: String },
    avaliable: { type: Boolean },
    date: { type: Date, default: Date.now }
});

const Painting = mongoose.model("paintings", paintingSchema);

module.exports = Painting;