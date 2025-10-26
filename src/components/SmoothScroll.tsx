/** 
 * File: src/components/SmoothScroll.tsx
 * Author: Yash Balotiya
 * Description: Smooth scrolling component using Lenis. This is the main component for smooth scrolling.
 * Created on: 20/08/2025
 * Last Modified: 20/08/2025
*/

"use client";

// Importing required modules & libraries
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { PropsWithChildren } from "react";

// SmoothScroll component
export default function SmoothScroll({ children }: PropsWithChildren) {
    // Initializing Lenis for smooth scrolling
    useEffect(() => {
        // Creating a new instance of Lenis
        const lenis = new Lenis({
            duration: 1.2,   // scroll duration
            easing: (t) => 1 - Math.pow(1 - t, 3), // easing function
            smoothWheel: true,
        });

        // Animation frame function
        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        // Starting the animation
        requestAnimationFrame(raf);
    }, []);

    // Rendering children
    return <>{children}</>;
}
