/** 
 * File: next.config.ts
 * Author: Yash Balotiya
 * Description: Next.js configuration file
 * Created on: 19/08/2025
 * Last Modified: 19/08/2025
*/

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    output: "export",

    // Base path for the application, Change this when deploying to a subdirectory
    // basePath: '/smtp',
    // assetPrefix: '/smtp',
};

export default nextConfig;
