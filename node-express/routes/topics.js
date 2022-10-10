const router = require('express').Router();
const {Topic} = require("../persistence/models/Topic.js");

router.get("/getAll", (req, res) => {
   Topic.find({}).then((topics) => {
        res.status(200).send(topics);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

router.post("/create", (req, res) => {
    Topic.create(req.body).then((topic) => {
        res.status(200).send(topic);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

router.put("/update/:id", (req, res) => {
    const id = req.params.id;
    Topic.updateOne({ "_id": id }, req.body).then((result) => {
        res.status(200).send("Topic with id " + id + " successfully updated");
    }).catch((err) => {
        res.status(500).send(err);
    });
});

router.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    Topic.deleteOne({ "_id": id }).then((result) => {
        res.status(200).send("Topic with id " + id + " successfully deleted");
    }).catch((err) => {
        res.status(500).send(err);
    });
});

module.exports = router;