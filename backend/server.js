require("dotenv").config();

const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

const FILE_PATH = "./data/tasks.json";

const getTasks = () => {
  const data = fs.readFileSync(FILE_PATH);
  return JSON.parse(data);
};

const saveTasks = (tasks) => {
  fs.writeFileSync(
    FILE_PATH,
    JSON.stringify(tasks, null, 2)
  );
};

app.get("/", (req, res) => {
  res.send("Pipeline API Running");
});

app.get("/api/tasks", (req, res) => {
  res.json(getTasks());
});

app.post("/api/tasks", (req, res) => {
  const tasks = getTasks();

  const {
    task,
    description,
    status,
    progress,
  } = req.body;

  const newTask = {
    id: Date.now(),
    task,
    description,
    status,
    progress,
  };

  tasks.push(newTask);

  saveTasks(tasks);

  res.status(201).json(newTask);
});

app.put("/api/tasks/:id", (req, res) => {
  const tasks = getTasks();

  const id = Number(req.params.id);

  const task = tasks.find(
    (t) => t.id === id
  );

  if (!task) {
    return res.status(404).json({
      message: "Task not found",
    });
  }

  task.status = req.body.status;
  task.progress = req.body.progress;

  saveTasks(tasks);

  res.json(task);
});

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});