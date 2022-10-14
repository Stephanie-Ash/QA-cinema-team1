const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const UIDSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true

}});

const UID = model('UID', UIDSchema);
module.exports = { 'UID': UID };