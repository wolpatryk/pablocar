# Improvements Plan for PABLOCAR Website

This document outlines a plan to improve the PABLOCAR website, focusing on code quality, performance, accessibility, and maintainability.

## 1. Overall Project Structure and Maintainability

The most critical improvement is to address the code duplication between `index.html` and `pages/service.html`.

*   **Implement a Templating System:**
    *   Create separate files for the header and footer (e.g., `templates/header.html`, `templates/footer.html`).
    *   Use JavaScript (e.g., the `fetch` API in `js/app.js`) to load these templates into the main pages. This will eliminate code duplication and make the site easier to maintain.

## 2. Improvements for `index.html`

*   **Code Quality and Structure:**
    *   **Semantic HTML:** Replace `<h3>` tags for main section titles with `<h2>`.
    *   **Consolidate CSS:** Replace custom grid styles in `css/main.css` with Materialize's grid system and establish a consistent color palette.
*   **Component Usage (Materialize CSS):**
    *   **Buttons:** Apply `.btn` classes directly to `<a>` tags.
    *   **Slider:** Replace the custom slider with the built-in Materialize Slider component.
*   **Performance:**
    *   **jQuery:** Remove the redundant jQuery import.
    *   **Image Optimization:** Compress images and use modern formats like WebP.
*   **Accessibility (a11y):**
    *   **Image Alt Tags:** Add descriptive `alt` text to all images.
    *   **Color Contrast:** Ensure sufficient color contrast for all text.

## 3. Improvements for `pages/service.html`

*   **Component and CSS Usage:**
    *   **Buttons in Cards:** Style `<a>` tags directly as buttons instead of wrapping `<button>` elements.
    *   **Custom JavaScript:** Consolidate the `pulse` effect script into the main `app.js` file if it's intended to be a reusable feature.
*   **Performance:**
    *   **jQuery:** Remove the redundant jQuery import.
    *   **Image Optimization:** Compress the images in the `/img/service/` directory.
*   **Accessibility (a11y):**
    *   **Image Alt Tags:** Add descriptive `alt` attributes to all images in the service cards.