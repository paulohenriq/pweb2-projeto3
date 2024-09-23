import React, { useState, useEffect } from 'react'

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

type TaskFormProps = {
  onSubmit: (task: Task | Omit<Task, 'id' | 'createdAt' | 'updatedAt'>) => void
  users: User[]
  initialTask: Task | null
}

export const TaskForm: React.FC<TaskFormProps> = ({ onSubmit, users, initialTask }) => {
  const [id, setId] = useState<string | null>(null)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [assignedTo, setAssignedTo] = useState('')

  useEffect(() => {
    if (initialTask) {
      setId(initialTask.id)
      setTitle(initialTask.title)
      setDescription(initialTask.description)
      setAssignedTo(initialTask.assignedTo || '')
    }
  }, [initialTask])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const task = { title, description, assignedTo: assignedTo || undefined }
    if (id) {
      onSubmit({ ...task, id } as Task)
    } else {
      onSubmit(task)
    }
    setTitle('')
    setDescription('')
    setAssignedTo('')
    setId(null)
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4">{initialTask ? 'Edit Task' : 'Create New Task'}</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="assignedTo" className="block text-sm font-medium text-gray-700">
            Assigned To
          </label>
          <select
            id="assignedTo"
            value={assignedTo}
            onChange={(e) => setAssignedTo(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option value="">Unassigned</option>
            {users.map((user) => (
              <option key={user.username} value={user.username}>
                {user.username}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        {initialTask ? 'Update Task' : 'Create Task'}
      </button>
    </form>
  )
}