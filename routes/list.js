const express = require("express");
const router = express.Router();
const List = require("../models/List");
const Task = require("../models/Task");

router.post("/lists", (req, res) => {

  console.log("hello");

const title = req.body.title;
const description = req.body.description;
const tasks = [];
  
List.create({

    title: title,

    description: description,

    tasks: tasks,
   
  })

    .then((list) => {

      res.status(201).json(list);

    })

    .catch((err) => {

      res.json(err);

    });

});

// GET /api/lists

router.get("/lists", (req, res) => {

  List.find()

    .populate("tasks")

    .then((lists) => {

      res.status(200).json(lists);

    })

    .catch((err) => {

      console.log(err);

      res.json(err);

    });

});

router.get("/lists/:id", (req, res) => {

  // check if req.params.id is valid, if not respond with a 4xx status code

  List.findById(req.params.id)

    .populate("tasks")

    .then((list) => {

      if (!list) {

        res.status(404).json(list);

      } else {

        res.status(200).json(list);

      }

    })

    .catch((err) => {

      res.json(err);

    });

});

// PUT /api/lists/:id

router.put("/lists/:id", (req, res) => {

  const { title, description } = req.body;

  List.findByIdAndUpdate(

    req.params.id,

    { title, description },

    // { new: true } ensures that we are getting the updated document in the .then callback

    { new: true }

  )

    .then((list) => {

      res.status(200).json(list);

    })

    .catch((err) => {

      res.json(err);

    });

});

// DELETE /api/lists/:id

router.delete("/lists/:id", (req, res) => {

  // delete the list

  List.findByIdAndDelete(req.params.id)

    .then((list) => {

      return Task.deleteMany({ _id: { $in: list.tasks } }).then(() => {

        res.status(200).json({ message: "ok" });

      });

    })
    .catch((err) => {

      res.json(err);

    });

});

module.exports = router;