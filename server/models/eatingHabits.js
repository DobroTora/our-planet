const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eatingHabitsSchema = new Schema({
    name: String,
    maxSpeed: Number,
    id: String
});

module.exports = mongoose.model('Eating Habits'.eatingHabitsSchema);