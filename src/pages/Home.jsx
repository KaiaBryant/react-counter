import React, { useState } from "react";
import TaskForm from "../components/TaskForm.jsx";
import TaskList from "../components/TaskList.jsx";

export default function Home() {
    const [tasks, setTasks] = useState([]);

    // Add task
    const addTask = (task) => {
        setTasks([...tasks, { id: Date.now(), text: task, done: false }]);
    };

    //Edit existing task
    const editTask = (id, newText) => {
        setTasks(tasks.map((t) => (t.id === id ? { ...t, text: newText } : t)));
    };

    //Delete esxiting task
    const deleteTask = (id) => {
        setTasks(tasks.filter((t) => t.id !== id));
    };

    //Confirm task completition 
    const toggleDone = (id) => {
        setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
    };

    return (
        <div className="home">
            <TaskForm onAdd={addTask} />
            <TaskList
                tasks={tasks}
                onDelete={deleteTask}
                onEdit={editTask}
                onToggle={toggleDone}
            />
        </div>
    );
}