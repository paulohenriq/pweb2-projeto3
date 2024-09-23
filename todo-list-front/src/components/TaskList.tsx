import React from 'react'
import { TaskItem } from './TaskItem'

type Task = {
  id: string
  title: string
  description: string
  assignedTo?: string
  createdAt: Date
  updatedAt: Date
}

type TaskListProps = {
  tasks: Task[]
  onSelectTask: (task: Task) => void
  onEditTask: (task: Task) => void
  onDeleteTask: (taskId: string) => void
}

export const TaskList: React.FC<TaskListProps> = ({ tasks, onSelectTask, onEditTask, onDeleteTask }) => {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold mb-2">Tasks</h2>
      <ul className="space-y-2">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onSelect={() => onSelectTask(task)}
            onEdit={() => onEditTask(task)}
            onDelete={() => onDeleteTask(task.id)}
          />
        ))}
      </ul>
    </div>
  )
}