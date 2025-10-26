/**
 * File: src/types/css.d.ts
 * Author: Yash Balotiya
 * Description: Type declarations for CSS imports
 * Created on: 03/10/2025
 * Last Modified: 03/10/2025
 */

declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}