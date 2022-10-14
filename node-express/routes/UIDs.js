const router = require('express').Router();
const { UID } = require('../persistence/models/UID.js');

router.get("/login/:username", (req, res) => {
    let username = req.params.username;
    UID.findOne({'username': username}).then((UID) => {
        res.status(200).send(UID);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

router.post("/create", (req, res) => {
    UID.create(req.body).then((UID) => {
        res.status(201).send(UID);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

module.exports = router;