import * as React from "react";
import { useState } from "react";
import { tasks as initialTasks, Task } from "../data/tasks";
import TaskList from "../components/TaskList";

const Home: React.FC = () => {
    const [taskList, setTaskList] = useState<Task[]>(initialTasks);

    const handleDelete = (id: number): void => {
        setTaskList((prev) => prev.filter((task) => task.id !== id));
    };

    const handleStatusChange = (id: number): void => {
        setTaskList((prev) =>
            prev.map((task) =>
                task.id === id ? { ...task, status: task.status === 0 ? 1 : 0 } : task
            )
        );
    };

    return (
        <div className="home">
            <h1>To-Do List</h1>
    <div className="columns">
    <TaskList
        title="To make"
    tasks={taskList.filter((task) => task.status === 0)}
    onDelete={handleDelete}
    onStatusChange={handleStatusChange}
    />
    <TaskList
    title="Done"
    tasks={taskList.filter((task) => task.status === 1)}
    onDelete={handleDelete}
    onStatusChange={handleStatusChange}
    />
    </div>
    </div>
);
};

export default Home;
