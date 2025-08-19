/** 
 * File: src/components/Navbar/Navbar.tsx
 * Author: Yash Balotiya
 * Description: Navbar component for the application.
 * Created on: 19/08/2025
 * Last Modified: 19/08/2025
*/

// Importing required modules & libraries
import Link from "next/link";
import style from "./Navbar.module.css";

// Navbar component
const Navbar = () => {

    // Navbar Links
    const links = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/services", label: "Services" },
        { href: "/contact", label: "Contact" },
    ];

    // Returning the Navbar JSX
    return (
        <header className={style.navbar}>
            {/* Logo */}
            <Link href="/">
                <img
                    src="/images/Rupie Finance Logo.png"
                    alt="Rupie Finance Logo"
                    className={style.logo}
                />
            </Link>

            {/* Navigation Links */}
            <nav>
                {links.map((link) => (
                    <Link key={link.href} href={link.href} className={style.link}>
                        {link.label}
                    </Link>
                ))}
            </nav>

            {/* Apply Now Button */}
            <Link href="/apply" id={style.applyButton}>Apply Now</Link>
        </header>
    );
}

export default Navbar;