const express = require("express");
const db = require("../models");
const router = express.Router();

router.get("/all", (req, res) => {
    db.Todo.findAll().then((todos) => res.send(todos));
});

router.post("/add", (req, res) => {
    db.Todo.create({
        todo: req.body.todo,
    }).then((added) => res.send(added));
});

router.put("/edit", (req, res) => {
    db.Todo.update(
        {
            todo: req.body.todo,
        },
        {
            where: {
                id: req.body.id,
            },
        }
    ).then(() => res.send("updated"));
});

router.delete("/delete/:id", (req, res) => {
    db.Todo.destroy({
        where: {
            id: req.params.id,
        },
    }).then(() => res.send("deleted"));
});

module.exports = router;
