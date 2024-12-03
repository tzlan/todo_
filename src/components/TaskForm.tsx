import * as React from "react";
import { useState } from "react";
import {Task} from "../data/tasks";

interface TaskFormProps {
    onAddTask: (newTask: Task) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [heure, setHeure] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Empêche la soumission par défaut du formulaire

        if (!title || !description || !date || !heure) {
            alert("Tous les champs doivent être remplis.");
            return;
        }

        // Crée une nouvelle tâche avec un ID unique
        const newTask: Task = {
            id: Date.now(),
            title,
            description,
            date,
            heure,
            status: 0, // Statut initial : à faire
        };

        onAddTask(newTask); // Passe la tâche au composant parent
        setTitle(""); // Réinitialise les champs après ajout
        setDescription("");
        setDate("");
        setHeure("");
    };

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Titre"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            <input
                type="time"
                value={heure}
                onChange={(e) => setHeure(e.target.value)}
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Ajouter la tâche
            </button>
        </form>
    );
};

export default TaskForm;
