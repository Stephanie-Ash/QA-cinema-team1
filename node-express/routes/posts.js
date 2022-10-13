const router = require('express').Router();
const {Post} = require("../persistence/models/Post.js");

router.get("/getAll", (req, res) => {
    Post.find({}).then((posts) => {
         res.status(200).send(posts);
     }).catch((err) => {
         res.status(500).send(err);
     });
 });

 router.get("/get/:topic_name", (req, res) => {
    const topic_name = req.params.topic_name;
    Post.find({"topic_name": topic_name, 'isApproved': true}).then((post) => {
        res.status(200).send(post);
    }).catch((err) => {
        res.status(500).send(err);
    });
});
router.post("/create", (req, res) => {
    Post.create(req.body).then((post) => {
        res.status(200).send(post);
    }).catch((err) => {
        res.status(500).send(err);
    });
});



router.get("/getPending", (req, res) => {
    Post.find({'isApproved':false}).then((posts) => {
         res.status(200).send(posts);
     }).catch((err) => {
         res.status(500).send(err);
     });
 });


 router.put("/update/:id", (req, res) => {
    const id = req.params.id;
    Post.updateOne({ "_id": id }, req.body).then((result) => {
        res.status(200).send("Post with ID " + id + " successfully updated");
    }).catch((err) => {
        res.status(500).send(err);
    });
});


router.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    Post.deleteOne({ "_id": id }, req.body).then((result) => {
        res.status(200).send("Post with ID " + id + " successfully deleted");
    }).catch((err) => {
        res.status(500).send(err);
    });
});

module.exports= router;