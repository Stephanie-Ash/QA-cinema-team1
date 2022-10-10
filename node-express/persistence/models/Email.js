const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const EmailSchema = new Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});

const Email = model('Email', EmailSchema);
module.exports = { 'Email': Email };