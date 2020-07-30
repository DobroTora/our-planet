const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const animalSchema = new Schema({
    name: String,
    type: String,
    eatingHabitsId: String
});

module.exports = mongoose.model('Animals'.animalSchema);