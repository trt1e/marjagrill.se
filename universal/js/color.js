let currentTheme = localStorage.getItem("color-theme");
console.log("The " + currentTheme + " theme is loaded");

// localStorage.setItem("color-theme", "light");
// localStorage.setItem("color-theme", "dark");

if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);
} else {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("color-theme", "dark");
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("color-theme", "light");
    };
};