// Task details
//useParams hook for task ID from the URL
import React from "react";
import { useParams, Link } from "react-router-dom";

export default function TaskDetail() {
    const { id } = useParams();

    return (
        <div className="task-detail">
            <h2>Task Details</h2>
            <p>Task ID: {id}</p>
            <Link to="/">🔙 Back to list</Link>
        </div>
    );
}
