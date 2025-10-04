/** 
 * File: src/components/Navbar/Navbar.tsx
 * Author: Yash Balotiya
 * Description: Navbar component for the application.
 * Created on: 19/08/2025
 * Last Modified: 04/10/2025
*/

"use client";

// Importing required modules & libraries
import { useState } from "react";
import Link from "next/link";
import style from "./Navbar.module.css";

// Navbar Component
const Navbar = () => {
    // State to manage mobile menu visibility
    const [menuOpen, setMenuOpen] = useState(false);

    // Navigation links
    const links = [
        { href: "/", label: "Home" },
        { href: "/loans", label: "Loans" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
    ];

    // Toggle mobile menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className={style.navbar}>
            {/* Logo */}
            <Link href="/">
                <img
                    src="/images/Logo Without BG.png"
                    alt="Rupie Finance Logo"
                    className={style.logo}
                />
            </Link>

            {/* Hamburger Icon */}
            <div className={style.hamburger} onClick={toggleMenu}>
                <div className={style.bar}></div>
                <div className={style.bar}></div>
                <div className={style.bar}></div>
            </div>

            {/* Mobile Sidebar */}
            <ul className={`${style.sidebar} ${menuOpen ? style.show : ""}`}>
                <li onClick={toggleMenu}><a href="#">✕</a></li>
                {links.map(link => (
                    <li key={link.href} onClick={toggleMenu}>
                        <Link href={link.href}>{link.label}</Link>
                    </li>
                ))}
                <li onClick={toggleMenu}>
                    <Link href="/contact">Apply Loan</Link>
                </li>
            </ul>

            {/* Desktop Nav */}
            <nav className={style.navLinks} id={style.desktopLinks}>
                {links.map((link) => (
                    <Link key={link.href} href={link.href} className={style.link}>
                        {link.label}
                    </Link>
                ))}
            </nav>

            {/* Apply Button - Desktop */}
            <Link href="/contact" id={style.applyButton}>Apply Loan</Link>
        </header>
    );
};

export default Navbar;
