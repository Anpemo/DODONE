const { Router } = require('express');
const controller = require('../controllers/todoController');

function toDoRouter() {
  const router = Router();

  router
    .route('/')
    .get(controller.getAllToDo)
    .post(controller.createToDo);

  router
    .route('done/');

  return router;
}

module.exports = toDoRouter();
