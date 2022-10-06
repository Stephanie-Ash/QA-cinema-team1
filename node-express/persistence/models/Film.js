const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const FilmSchema = new Schema({
    film_id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    image_url: String,
    synopsis: String,
    director: String,
    actors: [String],
    genre: String,
    classification: String,
    length: String,
    current: Boolean,
    upcoming: Boolean
});

const Film = model('Film', FilmSchema);
module.exports = {'Film': Film};