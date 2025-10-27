// Header with To-do and Counter
import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
    const location = useLocation(); // useState -> useLocation

    return (
        <header className="header">
            <h1>To-Do App</h1>
            <nav>
                <Link
                    to="/"
                    className={location.pathname === "/" ? "active" : ""}
                >
                    Home
                </Link>
                <Link
                    to="/counter"
                    className={location.pathname === "/counter" ? "active" : ""}
                >
                    Counter
                </Link>
            </nav>
        </header>
    );
}
