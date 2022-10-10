const router = require('express').Router();
const { Booking } = require('../persistence/models/Booking.js');

router.get("/getAll", (req, res) => {
    Booking.find({}).then((bookings) => {
        res.status(200).send(films);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

router.get("/get/:bookingNum", (req, res) => {
    const bookingNum = req.params.bookingNum;
    Booking.findOne({ "booking_num": bookingNum }).then((booking) => {
        res.status(200).send(booking);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

router.post("/create", (req, res) => {
    Film.create(req.body).then((booking) => {
        res.status(200).send(booking);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

router.put("/update/:bookingNum", (req, res) => {
    const bookingNum = req.params.bookingNum;
    Film.updateOne({ "booking_num": bookingNum }, req.body).then((result) => {
        res.status(200).send("Booking with number " + bookingNum + " successfully updated");
    }).catch((err) => {
        res.status(500).send(err);
    });
});

router.delete("/delete/:bookingNum", (req, res) => {
    const bookingNum = req.params.bookingNum;
    Film.deleteOne({ "booking_num": bookingNum }).then((result) => {
        res.status(200).send("Booking with number " + bookingNum + " successfully deleted");
    }).catch((err) => {
        res.status(500).send(err);
    });
});

module.exports = router;
