const mongoose = require('mongoose');
const { Booking } = require('../persistence/models/Booking.js');
const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index.js');

chai.use(chaiHttp);

const url = "http://127.0.0.1:3001";

before("Connect to database", async function () {
    await mongoose.connection.close();
    await mongoose.connect("mongodb://localhost:27017/test-qa-cinema");
    console.log("Test DB connected");
})

describe("Booking tests", function () {

    this.beforeAll("Add test data", async function () {
        const bookingOne = {
            booking_num: "book1",
            cust_name: "John Doe",
            film: "Great Film",
            date: "13/10/2022",
            time: "20:00",
            screen_type: "Standard",
            adults: 1,
            total_seats: 1,
            price: 10,
            has_paid: true
        }

        const bookingTwo = {
            booking_num: "book2",
            cust_name: "Jane Smith",
            film: "Other Film",
            date: "14/10/2022",
            time: "14:00",
            screen_type: "Deluxe",
            adults: 2,
            total_seats: 2,
            price: 20,
            has_paid: true
        }

        await Booking.deleteMany({});
        await Booking.create(bookingOne);
        await Booking.create(bookingTwo);

    })

    it("Gets all booking", function (done) {
        chai.request(`${url}/bookings`).get("/getAll").end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.body.length).to.equal(2);
            expect(res.body[0]).to.include({
                booking_num: "book1",
                cust_name: "John Doe",
                film: "Great Film",
                date: "13/10/2022",
                time: "20:00",
                screen_type: "Standard",
                adults: 1,
                total_seats: 1,
                price: 10,
                has_paid: true
            });
            expect(res.body[1]).to.include({
                booking_num: "book2",
                cust_name: "Jane Smith",
                film: "Other Film",
                date: "14/10/2022",
                time: "14:00",
                screen_type: "Deluxe",
                adults: 2,
                total_seats: 2,
                price: 20,
                has_paid: true
            });
            return done();
        });
    })

    it("Gets booking by booking number", function (done) {
        chai.request(`${url}/bookings`).get("/get/book1").end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.body).to.include({
                booking_num: "book1",
                cust_name: "John Doe",
                film: "Great Film",
                date: "13/10/2022",
                time: "20:00",
                screen_type: "Standard",
                adults: 1,
                total_seats: 1,
                price: 10,
                has_paid: true
            });
            return done();
        });

    })

    it("Creates a booking", function (done) {
        const booking = {
            booking_num: "book3",
            cust_name: "Jordan Benbelaid",
            film: "Best Film",
            date: "15/10/2022",
            time: "09:00",
            screen_type: "Standard",
            adults: 1,
            total_seats: 1,
            price: 10,
            has_paid: true
        }

        chai.request(`${url}/bookings`).post("/create").send(booking).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(201);
            expect(res.body).to.include(booking);

            return done();
        });
    });

    it("Updates a booking", function (done) {
        const booking = {
            hasPaid: false
        }

        chai.request(`${url}/bookings`).put("/update/book2").send(booking).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.have.property("text")
            expect(res.text).to.equal("Booking with number book2 successfully updated")

            return done();
        });
    })

    it("Deletes a booking", function (done) {
        chai.request(`${url}/bookings`).delete("/delete/book2").end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.have.property("text")
            expect(res.text).to.equal("Booking with number book2 successfully deleted")

            return done();
        });
    })

})