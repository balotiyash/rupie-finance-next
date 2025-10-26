/** 
 * File: src/app/layout.tsx
 * Author: Yash Balotiya
 * Description: Main Layout component for the application. Can be consider it as Index Page of the Application
 * Created on: 19/08/2025
 * Last Modified: 04/10/2025
*/

// Importing required modules & libraries
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import Footer from "@/components/Footer/Footer";

// Creating font variables
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

// Exporting metadata for the application
export const metadata: Metadata = {
    title: "Rupie Finance | Loans made simple",
    description: "Your one-stop solution for all loan needs.",
    keywords: ["loans", "finance", "Rupie Finance"],
    icons: {
        icon: "/svgs/rupee-sign-solid-full.svg",
    },
    other: {
        'color-scheme': 'light only',
    },
};

// Root layout component
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <meta name="color-scheme" content="light only" />
                <meta name="theme-color" content="#ffffff" />
            </head>
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                {/* Navbar component for navigation */}
                <Navbar />

                {/* Smooth scrolling container */}
                <SmoothScroll>

                    {/* Main Content */}
                    {children}
                </SmoothScroll>

                {/* Footer */}
                <Footer />
            </body>
        </html>
    );
}
