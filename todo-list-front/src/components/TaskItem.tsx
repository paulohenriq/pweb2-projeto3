import React from 'react'

type Task = {
  id: string
  title: string
  description: string
  assignedTo?: string
  createdAt: Date
  updatedAt: Date
}

type TaskItemProps = {
  task: Task
  onSelect: () => void
  onEdit: () => void
  onDelete: () => void
}

export const TaskItem: React.FC<TaskItemProps> = ({ task, onSelect, onEdit, onDelete }) => {
  return (
    <li className="bg-white shadow rounded-lg p-4 flex justify-between items-center">
      <div>
        <h3 className="font-semibold">{task.title}</h3>
        <p className="text-sm text-gray-600">{task.description.substring(0, 50)}...</p>
      </div>
      <div className="space-x-2">
        <button onClick={onSelect} className="text-blue-500 hover:text-blue-700">
          View
        </button>
        <button onClick={onEdit} className="text-green-500 hover:text-green-700">
          Edit
        </button>
        <button onClick={onDelete} className="text-red-500 hover:text-red-700">
          Delete
        </button>
      </div>
    </li>
  )
}