const express = require('express');
const Task = require('../models/Task');
const List = require('../models/List');
const router = express.Router();

router.get('/:id', (req, res) => {

  const id = req.params.id;

  Task.findById(id)

    .then(task => {

      res.status(200).json(task);

    })

    .catch(err => {

      res.json(err);

    });

});

router.post('/', (req, res) => {

  const { title, description, listId } = req.body;

  console.log('task');

  Task.create({

    title,

    description,

    list: listId

  })

    .then(task => {

      return List.findByIdAndUpdate(listId, {

        $push: { tasks: task._id }

      }).then(() => {

        res.status(201).json({

          message: `Task with id ${task._id} was successfully added to list with id ${listId}`

        });

      });

    })

    .catch(err => {

      res.json(err);

    });

});

router.put('/:id', (req, res, next) => {

  const id = req.params.id;

  const { title, description } = req.body;

  Task.findByIdAndUpdate(id, { title, description }, { new: true })

    .then(task => {

      res.json(task);

    })
    .catch(err => {

      res.json(err);

    });

});

router.delete('/:id', (req, res, next) => {

  const id = req.params.id;

  Task.findByIdAndDelete(id)

    .then(task => {

      return List.findByIdAndUpdate(task.list, {

        $pull: { tasks: id }

      }).then(() => {

        res.json({ message: 'ok' });

      });

    })
    .catch(err => {

      res.json(err);

    });

});

module.exports = router;