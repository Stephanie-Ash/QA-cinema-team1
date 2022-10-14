const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const BookingSchema = new Schema({
    booking_num: {
        type: String,
        required: true
    },
    cust_name: String,
    cust_email: String,
    film: String,
    date: String,
    time: String,
    screen_type: String,
    adults: Number,
    children: Number,
    concessions: Number,
    total_seats: Number,
    price: Number,
    has_paid: Boolean
});

const Booking = model('Booking', BookingSchema);
module.exports = {'Booking': Booking};