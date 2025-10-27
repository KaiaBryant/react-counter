import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import TaskDetail from "./pages/TaskDetail.jsx";
import Counter from "./pages/counter.jsx";
import Header from "./components/Header.jsx";

export default function App() {
    return (
        <div className="app">
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/task/:id" element={<TaskDetail />} />
                    <Route path="/counter" element={<Counter />} />
                </Routes>
            </main>
        </div>
    );
}