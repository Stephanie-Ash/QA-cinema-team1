const mongoose = require('mongoose');
const { Film } = require('../persistence/models/Film.js');
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

describe("Film tests", function () {

    this.beforeAll("Add test data", async function () {
        const filmOne = {
            film_id: 1,
            title: "Great Film",
            genre: "horror",
            current: true,
            upcoming: false
        }

        const filmTwo = {
            film_id: 2,
            title: "Rubbish Film",
            current: false,
            upcoming: true
        }

        const filmThree = {
            film_id: 3,
            title: "Some Film",
            current: false,
            upcoming: false
        }

        await Film.deleteMany({});
        await Film.create(filmOne);
        await Film.create(filmTwo);
        await Film.create(filmThree);
    })

    it("Gets all current and future films", function (done) {
        chai.request(`${url}/films`).get("/getAll").end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.body.length).to.equal(2);
            expect(res.body[0]).to.include({
                film_id: 1,
                title: "Great Film",
                current: true,
                upcoming: false
            });
            expect(res.body[1]).to.include({
                film_id: 2,
                title: "Rubbish Film",
                current: false,
                upcoming: true
            });
            return done();
        });
    })

    it("Gets film by id", function (done) {
        chai.request(`${url}/films`).get("/get/1").end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.body).to.include({
                film_id: 1,
                title: "Great Film",
                current: true,
                upcoming: false
            });
            return done();
        });

    })

    it("Gets film with title included in search term", function (done) {
        chai.request(`${url}/films`).get("/search?q=rubb").end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.body.length).to.equal(1);
            expect(res.body[0]).to.include({
                film_id: 2,
                title: "Rubbish Film",
                current: false,
                upcoming: true
            });
            return done();
        });
    })

    it("Gets film with genre included in search term", function (done) {
        chai.request(`${url}/films`).get("/search?q=Horror").end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.body.length).to.equal(1);
            expect(res.body[0]).to.include({
                film_id: 1,
                title: "Great Film",
                genre: "horror",
                current: true,
                upcoming: false
            });
            return done();
        });
    })

    it("Gets all current films", function (done) {
        chai.request(`${url}/films`).get("/current").end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.body.length).to.equal(1);
            expect(res.body[0]).to.include({
                film_id: 1,
                title: "Great Film",
                current: true,
                upcoming: false
            });
            return done();
        });
    })

    it("Gets all upcoming films", function (done) {
        chai.request(`${url}/films`).get("/upcoming").end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.body.length).to.equal(1);
            expect(res.body[0]).to.include({
                film_id: 2,
                title: "Rubbish Film",
                current: false,
                upcoming: true
            });
            return done();
        });
    })

    it("Creates a film", function (done) {
        const film = {
            film_id: 4,
            title: "New film",
            genre: "thriller",
            current: true,
            upcoming: false
        }

        chai.request(`${url}/films`).post("/create").send(film).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(201);
            expect(res.body).to.include(film);

            return done();
        });
    });

    it("Gives error when create film without required field", function (done) {
        const film = {
            film_id: 4,
            genre: "thriller",
            current: true,
            upcoming: false
        }

        chai.request(`${url}/films`).post("/create").send(film).end((err, res) => {
            expect(res).to.have.status(500);

            return done();
        });
    });

    it("Updates a film", function (done) {
        const film = {
            title: "New Title"
        }

        chai.request(`${url}/films`).put("/update/3").send(film).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.have.property("text")
            expect(res.text).to.equal("Film with id 3 successfully updated")

            return done();
        });
    })

    it("Deletes a film", function (done) {
        chai.request(`${url}/films`).delete("/delete/2").end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.have.property("text")
            expect(res.text).to.equal("Film with id 2 successfully deleted")

            return done();
        });
    })

})