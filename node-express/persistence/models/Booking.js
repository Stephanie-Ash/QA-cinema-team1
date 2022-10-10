const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const BookingSchema = new Schema({
    booking_num: String,
    cust_name: String,
    cust_email: String,
    film: {
        film_id: Number,
        title: ""
    },
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