const express = require('express')
const cors = require('cors');

const app = express()
const port = 3334

app.use(cors());
app.use(express.json());

const users = [
  {
    "username": "@joao",
    "id": "2123"
  },
  {
    "username": "@maria",
    "id": "2124"
  }
];
const tasks = [
  {
    "id": "1",
    "title": "Tarefa de exemplo 2",
    "description": "Descrição de exemplo",
    "assignedTo": "@maria",
    "createdAt": "2024-09-23T17:46:16.257Z",
    "updatedAt": "2024-09-23T22:34:05.482Z"
  },
  {
    "id": "2",
    "title": "kçlklçk",
    "description": "çlkçlk",
    "assignedTo": "@maria",
    "createdAt": "2024-09-23T23:31:38.083Z",
    "updatedAt": "2024-09-23T23:31:38.083Z"
  }
];

let idTasks = 2;

app.get('/welcome', (req, res) => {
  res.send({
    message: "Hello World!"
  })
})

app.get('/users', (req, res) => {
  res.json(users)
})

app.get('/tasks', (req, res) => {
  res.json(tasks)
})

app.post('/tasks', (req, res) => {
  const { title, description, assignedTo } = req.body
  const newID = idTasks++;
  idTasks = newID;
  const newTask = {
    id: newID.toString(),
    title,
    description,
    assignedTo,
    createdAt: new Date(),
    updatedAt: new Date()
  }
  tasks.push(newTask)
  res.json(newTask)
})

app.patch('/tasks/:id', (req, res) => {
  const { id } = req.params
  const { title, description, assignedTo } = req.body
  const findIndex = tasks.findIndex(t => t.id === id)

  if (findIndex === -1) {
    return res.status(404).json({ message: 'Task not found' });
  }

  tasks[findIndex] = {
    ...tasks[findIndex],
    title,
    description,
    assignedTo,
    updatedAt: new Date()
  };

  res.json(tasks[findIndex]);
})

app.delete('/tasks/:id', (req, res) => {
  const { id } = req.params
  const findIndex = tasks.findIndex(t => t.id === id)
  tasks.splice(findIndex, 1)
  res.sendStatus(204)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})