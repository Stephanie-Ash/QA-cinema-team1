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
    start_date: Date,
    end_date: Date
});

const Film = model('Film', FilmSchema);
module.exports = {'Film': Film};