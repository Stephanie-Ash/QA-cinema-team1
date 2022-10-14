const mongoose = require('mongoose');
const { UID } = require('../persistence/models/UID.js');
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

describe("UID tests", function () {

    this.beforeAll("Add test data", async function () {
        let UIDOne = {
            username: "Jordan",
            password: "secure"
        }
        let UIDTwo = {
            username: "Jordan2",
            password: "securebutnotreally"
        }
        await UID.deleteMany({});
        await UID.create(UIDOne);
        await UID.create(UIDTwo);
    })

    it("Gets one uid", function (done) {
        chai.request(`${url}/uids`).get("/login/Jordan").end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.body).to.include({
                username: "Jordan",
                password: "secure"
            });
            return done();
        });
    })

    it("Creates one uid", function (done) {

        let uid = {
            username: "Jordan3",
            password: "thisisreallynotsecure"
        }

        chai.request(`${url}/uids`).post("/create").send(uid).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(201);
            expect(res.body).to.include({
                username: "Jordan3",
                password: "thisisreallynotsecure"
            });
            return done();
        });
    })

    it("Create one uid but required fields missing", function (done) {

        let uid = {
            username: "Jordan4"
        }

        chai.request(`${url}/uids`).post("/create").send(uid).end((err, res) => {
            expect(res).to.have.status(500);
            return done();
        });
    })
})

after("Stop Server", function(){
    server.close();
})
