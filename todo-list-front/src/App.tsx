import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { TaskList } from './components/TaskList'
import { TaskForm } from './components/TaskForm'
import { TaskDetails } from './components/TaskDetails'

type Task = {
  id: string
  title: string
  description: string
  assignedTo?: string
  createdAt: Date
  updatedAt: Date
}

type User = {
  username: string
}

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [users, setUsers] = useState<User[]>([])
  const [selectedTask, setSelectedTask] = useState<Task | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchTasks()
    fetchUsers()
  }, [])

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:3334/tasks')
      setTasks(response.data)
    } catch (err) {
      setError('Erro ao buscar tarefas')
      console.error(err)
    }
  }

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3334/users')
      setUsers(response.data)
    } catch (err) {
      setError('Erro ao buscar usuários')
      console.error(err)
    }
  }

  const handleCreateTask = async (task: Omit<Task, "id" | "createdAt" | "updatedAt">): Promise<void> => {
    try {
      const newTask: Omit<Task, "id"> = {
        ...task,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      await axios.post('http://localhost:3334/tasks', newTask)
      fetchTasks()
    } catch (err) {
      setError('Erro ao criar tarefa')
      console.error(err)
    }
  };

  const handleUpdateTask = async (task: Task): Promise<void> => {
    try {
      const { createdAt, ...taskWithoutCreatedAt } = task;
      const updatedTask = {
        ...taskWithoutCreatedAt,
        updatedAt: new Date()
      };
      await axios.patch(`http://localhost:3334/tasks/${task.id}`, updatedTask)
      fetchTasks()
    } catch (err) {
      setError('Erro ao atualizar tarefa')
      console.error(err)
    }
  };

  const handleDeleteTask = async (taskId: string) => {
    try {
      await axios.delete(`http://localhost:3334/tasks/${taskId}`)
      fetchTasks()
      setSelectedTask(null)
    } catch (err) {
      setError('Erro ao deletar tarefa')
      console.error(err)
    }
  }

  const handleSubmitTask = async (task: Task | Omit<Task, "id" | "createdAt" | "updatedAt">): Promise<void> => {
    if (isEditing) {
      await handleUpdateTask(task as Task);
    } else {
      await handleCreateTask(task as Omit<Task, "id" | "createdAt" | "updatedAt">);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">TODO List</h1>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <TaskForm 
            onSubmit={handleSubmitTask} 
            users={users} 
            initialTask={isEditing ? selectedTask : null} 
          />
          <TaskList 
            tasks={tasks} 
            onSelectTask={(task) => {
              setSelectedTask(task)
              setIsEditing(true)
            }} 
            onEditTask={() => setIsEditing(true)} 
            onDeleteTask={handleDeleteTask} 
          />
        </div>
        <div>
          {selectedTask && (
            <TaskDetails
              task={selectedTask}
              onClose={() => {
                setSelectedTask(null)
                setIsEditing(false)
              }}
            />
          )}
        </div>
      </div>
    </div>
  )
}