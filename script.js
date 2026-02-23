/*
  ===========================================
  Prodesk IT Digital Agency - Landing Page JS
  Handles theme toggling and navbar scroll state
  ===========================================
*/

(() => {
  const body = document.body;
  const navbar = document.getElementById("navbar");
  const themeToggleButton = document.getElementById("themeToggle");

  const THEME_KEY = "prodesk-theme";

  // Applies the selected theme class and updates button state/text.
  const applyTheme = (theme) => {
    const isDarkMode = theme === "dark";
    body.classList.toggle("dark-mode", isDarkMode);
    themeToggleButton.setAttribute("aria-pressed", String(isDarkMode));
    themeToggleButton.textContent = isDarkMode ? "☀️ Light" : "🌙 Dark";
  };

  // Reads saved theme preference or falls back to the user's system preference.
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };

  // Toggles between light and dark mode, and persists the selection.
  const toggleTheme = () => {
    const nextTheme = body.classList.contains("dark-mode") ? "light" : "dark";
    applyTheme(nextTheme);
    localStorage.setItem(THEME_KEY, nextTheme);
  };

  // Adds a subtle shadow to navbar after scrolling past a small threshold.
  const updateNavbarOnScroll = () => {
    navbar.classList.toggle("scrolled", window.scrollY > 12);
  };

  // Initialize UI states and event listeners.
  applyTheme(getInitialTheme());
  updateNavbarOnScroll();

  themeToggleButton.addEventListener("click", toggleTheme);
  window.addEventListener("scroll", updateNavbarOnScroll);
})();
