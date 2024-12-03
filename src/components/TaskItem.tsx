
import { Task } from "../data/tasks";

interface TaskItemProps {
    task: Task;
    onDelete: (id: number) => void;
    onStatusChange: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onDelete, onStatusChange }) => {
    return (
        <div className="task-item">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>
            {task.date} à {task.heure}
    </p>
    <button
    onClick={() => onStatusChange(task.id)}
    className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition"
        >
        {task.status === 0 ? "Finish" : "Return to make"}
        </button>
        <button
    onClick={() => onDelete(task.id)}
    className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600 transition"
        >
        Delete
        </button>
        </div>
);
};

export default TaskItem;
