const ToDo = require('../models/toDoModel');

function toDoController() {
  async function getAllToDo(req, res) {
    try {
      const toDo = await ToDo.find().exec();
      res.json(toDo);
    } catch {
      res.send(404);
    }
  }

  function createToDo(req, res) {
    const newToDo = new ToDo({
      ...req.body
    });
    console.log(newToDo);
    newToDo.save((error) => {
      if (error) {
        console.log(error);
        res.send('Product already exists');
        res.status(500);
      } else {
        res.json(newToDo);
      }
    });
  }

  return {
    getAllToDo,
    createToDo
  };
}

module.exports = toDoController();
