const mongoose = require('mongoose');
const { Email } = require('../persistence/models/Email.js');
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

describe("Email tests", function () {

    this.beforeAll("Add test data", async function () {
        let emailOne = {
            fullname: "Ben Beck",
            email: "benbeck@gmail.com",
            subject: "Complaint",
            message: "The seats were not clean. I want a refund."
        }

        let emailTwo = {
            fullname: "Charlie Chaplin",
            email: "charliechaplin@gmail.com",
            subject: "Great staff",
            message: "The staff were very helpful today!"
        }

        await Email.deleteMany({});
        await Email.create(emailOne);
        await Email.create(emailTwo);
    })

    it("Gets all emails", function (done) {
        chai.request(`${url}/emails`).get("/getAll").end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.body.length).to.equal(2);
            expect(res.body[1]).to.include({
                fullname: "Charlie Chaplin",
                email: "charliechaplin@gmail.com",
                subject: "Great staff",
                message: "The staff were very helpful today!"
            });
            return done();
        });
    })

    it("Gets one email", function (done) {
        chai.request(`${url}/emails`).get("/get/charliechaplin@gmail.com").end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.body.length).to.equal(1);
            expect(res.body[0]).to.include({
                fullname: "Charlie Chaplin",
                email: "charliechaplin@gmail.com",
                subject: "Great staff",
                message: "The staff were very helpful today!"
            });
            return done();
        });
    })

    it("Creates one email", function (done) {

        let email = {
            fullname: "Denzer Dante",
            email: "denzerdante@gmail.com",
            subject: "Refund required",
            message: "I would like a refund for one ticket"
        }

        chai.request(`${url}/emails`).post("/create").send(email).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(201);
            expect(res.body).to.include({
                fullname: "Denzer Dante",
                email: "denzerdante@gmail.com",
                subject: "Refund required",
                message: "I would like a refund for one ticket"
            });
            return done();
        });
    })

    it("Delete all emails from a specific email address", function (done) {
        chai.request(`${url}/emails`).delete("/delete/charliechaplin@gmail.com").end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.have.property("text")
            expect(res.text).to.equal("Emails with email address charliechaplin@gmail.com successfully deleted")
            return done();
        });
    })

})