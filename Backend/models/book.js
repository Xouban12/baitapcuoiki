const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const bookSchema = new Schema({
    name: { type: String, required: true },
    isComplete: { type: Boolean, required: true },
});

module.exports = mongoose.model('book', bookSchema);