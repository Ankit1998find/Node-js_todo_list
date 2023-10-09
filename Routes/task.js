const express = require("express");

const taskController = require("../Controller/task");

const router = express.Router();

router
  .post("/", taskController.CreateTask)
  .get("/", taskController.getAllTask)
  // .get('/:userId',taskController.getTaskByUserId)
  .put("/:id", taskController.upadateTask)
  .delete("/:id", taskController.deleteTask);

exports.router = router;
