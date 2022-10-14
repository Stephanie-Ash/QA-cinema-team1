const mongoose = require('mongoose');
const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index.js');
const { Post } = require('../persistence/models/Post.js');

chai.use(chaiHttp);

const url = "http://127.0.0.1:3001";

before("Connect to database", async function () {
    await mongoose.connection.close();
    await mongoose.connect("mongodb://localhost:27017/test-qa-cinema");
    console.log("Test DB connected");
})

describe("Post test", function () {

    this.beforeAll("Add test data", async function () {
        let postOne = {
            topic_name: "Photograph",
            username: "cameraguy12",
            comment: "Amazing film",
            rating: 5,
            datePublished: "07/10/2022",
            isApproved: true

        }
        let postTwo = {
            topic_name: "ToyStory",
            username: "buzzdarkyear",
            comment: "Horrible watch",
            rating: 1,
            datePublished: "08/10/2022",
            isApproved: false

        }
        let postThree = {
            topic_name: "TheWeddingPlanner",
            username: "FinancialPlanner",
            comment: "i thought this would be helpful, it wasn't",
            rating: 3,
            datePublished: "09/10/2022",
            isApproved: true

        }

        await Post.deleteMany({});
        await Post.create(postOne);
        await Post.create(postTwo);
        await Post.create(postThree);
    })

    it("Gets all Posts from discussion board", function (done) {
        chai.request(`${url}/posts`).get("/getAll").end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.body.length).to.equal(3);
            expect(res.body[0]).to.include({
                topic_name: "Photograph",
                username: "cameraguy12",
                comment: "Amazing film",
                rating: 5,
                datePublished: "07/10/2022",
                isApproved: true

            });
            return done();
        })
    })


    it("Gets posts by topic name", function (done) {
        chai.request(`${url}/posts`).get("/get/Photograph").end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.body[0]).to.include({
                topic_name: "Photograph",
                username: "cameraguy12",
                comment: "Amazing film",
                rating: 5,
                datePublished: "07/10/2022",
                isApproved: true

            });
            return done();


        })
    })

    it("Gets unaproved posts", function (done) {
        chai.request(`${url}/posts`).get("/getPending").end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.body.length).to.equal(1);
            expect(res.body[0]).to.include({
                topic_name: "ToyStory",
                username: "buzzdarkyear",
                comment: "Horrible watch",
                rating: 1,
                datePublished: "08/10/2022",
                isApproved: false

            });
            return done();
        })
    })

    it("Should create a new post", function (done) {
        let postFour = {
            topic_name: "Yes",
            username: "jimbobgarry",
            comment: "confusing film",
            rating: 3,
            datePublished: "08/10/2022",
            isApproved: true
        }
        chai.request(`${url}/posts`).post("/create").send(postFour).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.body).to.include(postFour);
            return done();


        })

    })

    it('Should not create a post without username field', (done) => {
        let postFive = {
            topic_name: "Moonlight",
            comment: "confusing film",
            rating: 4,
            datePublished: "07/10/2022",
            isApproved: true
        }
        chai.request(`${url}/posts`).post("/create").send(postFive).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(500);
        });
        return done();
    })


})
