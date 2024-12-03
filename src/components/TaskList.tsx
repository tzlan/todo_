import * as React from "react";

import TaskItem from "./TaskItem";
import { Task } from "../data/tasks";

interface TaskListProps {
    title: string;
    tasks: Task[];
    onDelete: (id: number) => void;
    onStatusChange: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ title, tasks, onDelete, onStatusChange }) => {
    return (
        <div className="task-list">
            <h2>{title}</h2>
    {tasks.map((task) => (
        <TaskItem
            key={task.id}
        task={task}
        onDelete={onDelete}
        onStatusChange={onStatusChange}
        />
    ))}
    </div>
);
};

export default TaskList;
