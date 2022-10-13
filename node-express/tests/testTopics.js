const mongoose = require('mongoose');
const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index.js');
const {Topic} = require('../persistence/models/Topic.js');

chai.use(chaiHttp);

const url = "http://127.0.0.1:3001";

before("Connect to database", async function() {
    await mongoose.connection.close();
    await mongoose.connect("mongodb://localhost:27017/test-qa-cinema");
    console.log("Test DB connected");
})

describe("Topic tests", function() {

    this.beforeAll("Add test data", async function () {
        let topicOne = {
            topic_name: "FAQ"
        }
        
        let topicTwo = {
            topic_name: "Customer complaints"
        }

        let topicThree = {
            topic_name: "Customer experience"
        }

        await Topic.deleteMany({});
        await Topic.create(topicOne);
        await Topic.create(topicTwo);
        await Topic.create(topicThree);

    })

    it("Gets all Topics from discussion board", function(done) {
        chai.request(`${url}/topics`).get("/getAll").end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.body.length).to.equal(3);
            expect(res.body[0]).to.include({
                topic_name: "FAQ"

            });
            return done();
        })
    })

    // it("Gets topic by topic name", function(done) {
    //     chai.request(`${url}/topics`).get("/get/FAQ").end((err, res) => {
    //         expect(err).to.be.null;
    //         expect(res).to.have.status(200);
    //         expect(res.body[0]).to.include({
    //             topic_name: "FAQ"
    //         });
    //         return done();
    //     })
    // })

    it("Should create a new topic", function(done) {
        let topicFour = {
            topic_name: "Memberships"
        
        }
        chai.request(`${url}/topics`).post("/create").send(topicFour).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.body).to.include ({
                topic_name: "Memberships"
            });
            return done();


        })

    })

    it("Should not create a new topic", function(done) {
        let topicFive = { 
            topic_name: ""
            
        
        }
        chai.request(`${url}/topics`).post("/create").send(topicFive).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(500);
                

            });
            return done();
        })

    })

after("Stop Server", function(){
    server.close();
})



