const mongoose = require("mongoose");
const model = require("../Model/tasks");
const Task = model.task;

exports.CreateTask = async (req, res) => {
  try {
    console.log(req.body.taskTitle);
    if (!req.body.taskTitle) {
      return res.status(400).json({ message: "Task title is required" });
    }
    const tasks = new Task(req.body);
    await tasks.save();
    res.status(201).json({ tasks });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error in creating task" });
  }
};

exports.getAllTask = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//   exports.getTaskByUserId=async(req,res)=>{
//     try{
//     const {userId}=req.params;

// //       $or: [
// //     { userId: "userId1" },
// //     { userId: "userId2" },
// //     { Status: "Completed" }
// //   ]

//     const tasks=await Task.find({userId});
//     if(!tasks || tasks.length===0){
//      return res.status(404).json({message:"Tasks not found for this userid"});
//     }
//     res.status(200).json(tasks);
//     }catch(error){
//     res.status(500).json({error:error.message});

//     }
//   }

exports.upadateTask = async (req, res) => {
  try {
    const id = req.params.id;
    const tasks = await Task.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const id = req.params.id;
    const tasks = await Task.findByIdAndDelete({ _id: id });
    if (tasks == null) {
      return res.status(401).json({ message: "Nothing for Delete" });
    }
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
