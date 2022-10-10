const router = require('express').Router();
const { Email } = require('../persistence/models/Email.js');

router.get("/getAll", (req, res) => {
    Email.find({}).then((emails) => {
        res.status(200).send(emails);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

router.get("/get/:id", (req, res) => {
    const id = req.params.id;
    Email.findOne({ "email_id": id }).then((email) => {
        res.status(200).send(email);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

router.post("/create", (req, res) => {
    Email.create(req.body).then((email) => {
        res.status(200).send(email);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

router.put("/update/:id", (req, res) => {
    const id = req.params.id;
    Email.updateOne({ "email_id": id }, req.body).then((result) => {
        res.status(200).send("Email with id " + id + " successfully updated");
    }).catch((err) => {
        res.status(500).send(err);
    });
});

router.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    Email.deleteOne({ "email_id": id }).then((result) => {
        res.status(200).send("Email with id " + id + " successfully deleted");
    }).catch((err) => {
        res.status(500).send(err);
    });
});

module.exports = router;