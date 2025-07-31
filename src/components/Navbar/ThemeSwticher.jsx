"use client";
import React, { useEffect, useState } from 'react'
import styles from "./navbar.module.css";
import Link from 'next/link';
import { MdNightlightRound, MdSunny } from "react-icons/md";

function ThemeSwticher() {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        // LocalStorage'dan tema al
        const storedTheme = localStorage.getItem("theme") || "dark";
        setTheme(storedTheme);
        document.documentElement.setAttribute("data-theme", storedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };
    return (
        <>
            <button
                onClick={toggleTheme}
                aria-label="Toggle Theme"
                className="theme-toggle"
            >

                <div className={`toggle-thumb ${theme}`}>
                    {
                        theme === "dark" ? <span className="icon-sun"><MdSunny /></span>
                            :
                            <span className="icon-moon"><MdNightlightRound /></span>
                    }
                </div>
            </button>
        </>
    )
}

export default ThemeSwticher