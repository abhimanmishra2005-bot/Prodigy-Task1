# Task 1: Responsive Landing Page

This project is a responsive landing page created as part of a web development task. The goal was to build a visually appealing single-page website with an interactive navigation menu that changes its appearance based on user interaction (scrolling and hovering).

## Features

- **Fully Responsive Design**: The layout adapts seamlessly to various screen sizes, including desktops, tablets, and mobile phones.
- **Fixed Navigation Bar**: The navigation menu remains fixed at the top of the page for easy access to all sections.
- **Dynamic Scroll Effect**: The navigation bar is transparent when the user is at the top of the page and transitions to a solid, blurred background upon scrolling down.
- **Interactive Hover Effects**: Navigation links feature a smooth underline animation on hover to provide visual feedback.
- **Smooth Scrolling**: Clicking on a navigation link smoothly scrolls the page to the corresponding section.
- **Mobile Hamburger Menu**: A functional hamburger menu is implemented for smaller screens to ensure a clean and accessible mobile experience.

## Demo

A live preview of the project can be seen by opening the `index.html` file in any modern web browser.

![Project Screenshot](https://i.imgur.com/lJ4gY7C.png) 
*(Note: This is a generic placeholder image. You can replace it with a screenshot of the actual project.)*

## Technologies Used

- **HTML5**: For the structure and content of the webpage.
- **CSS3**: For custom styling, animations, and layout.
- **JavaScript (ES6)**: To handle dynamic events like scrolling and mobile menu toggling.
- **Tailwind CSS**: A utility-first CSS framework used for rapid UI development. It is included via a CDN link in the HTML.
- **Google Fonts**: For the 'Inter' font used throughout the page.

## Setup and Installation

To run this project locally, follow these simple steps:

1.  **Download the files**: Make sure you have all three files:
    - `index.html`
    - `style.css`
    - `script.js`

2.  **Place files together**: Ensure all three files are located in the same directory/folder.

    ```
    /project-folder
    ├── index.html
    ├── style.css
    └── script.js
    ```

3.  **Open in Browser**: Open the `index.html` file in your preferred web browser (e.g., Google Chrome, Firefox, Safari).

No special build tools or dependencies are required as all external libraries (Tailwind CSS, Google Fonts) are loaded via a CDN.

## File Structure

- **`index.html`**: Contains the main HTML structure of the landing page, including all sections and the navigation bar. It links to the CSS and JavaScript files.
- **`style.css`**: Includes all the custom CSS rules that are not covered by Tailwind CSS, such as the gradient text effect, navigation link animations, and other specific design elements.
- **`script.js`**: Responsible for all the client-side interactivity. This includes listening for scroll events to change the header's style and managing the open/close state of the mobile menu.

---

This project was created based on the requirements provided by **Prodigy InfoTech**.
