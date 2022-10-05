const router = require('express').Router();
const {Film} = require('../persistence/models/Film.js');

router.get("/getAll", (req, res) => {
    Film.find({}).then((films) => {
        res.status(200).send(films);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

router.get("/get/:id", (req, res) => {
    const id = req.params.id;
    Film.findOne({"film_id": id}).then((film) => {
        res.status(200).send(film);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

router.post("/create", (req, res) => {
    Film.create(req.body).then((film) => {
        res.status(200).send(film);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

router.put("/update/:id", (req, res) => {
    const id = req.params.id;
    Film.updateOne({"film_id": id}, req.body).then((result) => {
        res.status(200).send("Film with id " + id + " successfully updated");
    }).catch((err) => {
        res.status(500).send(err);
    });
});

router.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    Film.deleteOne({"film_id": id}).then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

module.exports = router;