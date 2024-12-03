import * as React from "react";
import { useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
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

    const onDragEnd = (result: DropResult) => {
        const { source, destination } = result;

        if (!destination) return;

        const items = [...taskList];
        const [reorderedItem] = items.splice(source.index, 1);

        if (source.droppableId !== destination.droppableId) {
            reorderedItem.status = destination.droppableId === "done" ? 1 : 0;
        }

        items.splice(destination.index, 0, reorderedItem);
        setTaskList(items);
    };

    return (
        <div className="home">
            <h1>To-Do List</h1>
            <DragDropContext onDragEnd={onDragEnd}>
                <div className="columns">
                    <TaskList
                        title="To make"
                        tasks={taskList.filter((task) => task.status === 0)}
                        onDelete={handleDelete}
                        onStatusChange={handleStatusChange}
                        droppableId="todo"
                    />
                    <TaskList
                        title="Done"
                        tasks={taskList.filter((task) => task.status === 1)}
                        onDelete={handleDelete}
                        onStatusChange={handleStatusChange}
                        droppableId="done"
                    />
                </div>
            </DragDropContext>
        </div>
    );
};

export default Home;