const router = require('express').Router();
const { Email } = require('../persistence/models/Email.js');

router.get("/getAll", (req, res) => {
    Email.find({}).then((emails) => {
        res.status(200).send(emails);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

router.get("/get/:email", (req, res) => {
    const emailaddress = req.params.email;
    Email.find({ "email": emailaddress }).then((email) => {
        res.status(200).send(email);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

router.post("/create", (req, res) => {
    Email.create(req.body).then((email) => {
        res.status(201).send(email);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

// router.put("/update/:id", (req, res) => {
//     const id = req.params.id;
//     Email.updateOne({ "email_id": id }, req.body).then((result) => {
//         res.status(200).send("Email with id " + id + " successfully updated");
//     }).catch((err) => {
//         res.status(500).send(err);
//     });
// });

router.delete("/delete/:email", (req, res) => {
    const emailaddress = req.params.email;
    Email.deleteMany({ "email": emailaddress }).then((result) => {
        res.status(200).send("Emails with email address " + emailaddress + " successfully deleted");
    }).catch((err) => {
        res.status(500).send(err);
    });
});

module.exports = router;