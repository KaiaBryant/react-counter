import React, { useState } from "react";
import { Link } from "react-router-dom";

// Initialize task functions
export default function TaskList({ tasks, onDelete, onEdit, onToggle }) {
    const [editingId, setEditingId] = useState(null);
    const [newText, setNewText] = useState("");

    // Allow user to edit task, update id
    const handleEdit = (task) => {
        setEditingId(task.id);
        setNewText(task.text);
    };

    // Give task id to append on 'view'
    const handleSave = (id) => {
        onEdit(id, newText);
        setEditingId(null);
    };

    return (
        <div className="task-list">
            {tasks.length === 0 && <p>No tasks yet, add one!</p>}
            {tasks.map((task) => (
                <div
                    key={task.id}
                    className={`task-item ${task.done ? "done" : ""}`}
                >
                    <input
                        type="checkbox"
                        checked={task.done}
                        onChange={() => onToggle(task.id)}
                    />

                    {editingId === task.id ? (
                        <>
                            <input
                                type="text"
                                value={newText}
                                onChange={(e) => setNewText(e.target.value)}
                            />
                            <button onClick={() => handleSave(task.id)}>Save</button>
                        </>
                    ) : (
                        <>
                            <div>{task.text}</div>
                            <Link to={`/task/${task.id}`}>View</Link>
                            <button onClick={() => handleEdit(task)}>Edit</button>
                        </>
                    )}
                    <button className="delete" onClick={() => onDelete(task.id)}>
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
}
