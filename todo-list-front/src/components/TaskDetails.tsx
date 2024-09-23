import React from 'react'

type Task = {
  id: string
  title: string
  description: string
  assignedTo?: string
  createdAt: Date
  updatedAt: Date
}

type TaskDetailsProps = {
  task: Task
  onClose: () => void
}

export const TaskDetails: React.FC<TaskDetailsProps> = ({ task, onClose }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4">Task Details</h2>
      <div className="space-y-2">
        <p>
          <strong>Title:</strong> {task.title}
        </p>
        <p>
          <strong>Description:</strong> {task.description}
        </p>
        <p>
          <strong>Assigned To:</strong> {task.assignedTo || 'Unassigned'}
        </p>
        <p>
          <strong>Created At:</strong> {new Date(task.createdAt).toLocaleString()}
        </p>
        <p>
          <strong>Updated At:</strong> {new Date(task.updatedAt).toLocaleString()}
        </p>
      </div>
      <button
        onClick={onClose}
        className="mt-4 px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
      >
        Close
      </button>
    </div>
  )
}