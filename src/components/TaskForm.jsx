// Task form 
import React, { useState } from "react";

export default function TaskForm({ onAdd }) {
    const [task, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!task.trim()) return;
        onAdd(task);
        setTask("");
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Add new task here..."
            />
            <button type="submit">Add</button>
        </form>
    );
}
