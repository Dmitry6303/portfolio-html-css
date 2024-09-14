const btnDarkMode = document.querySelector(".dark-mode-btn");
const key = "darkMode";

if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    EnableDarkTheme();
}

if (localStorage.getItem(key) === "dark") {
    EnableDarkTheme();
} else if (localStorage.getItem("darkMode") === "light") {
    DisableDarkTheme();
}

// If you change system settings, change theme
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
    const newColorScheme = event.matches ? "dark" : "light";

    if (newColorScheme === "dark") {
        EnableDarkTheme();
        localStorage.setItem("darkMode", "dark");
    } else {
        DisableDarkTheme();
        localStorage.setItem("darkMode", "light");
    }
});

btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    const isDark = document.body.classList.toggle("dark");

    if (isDark) {
        localStorage.setItem(key, "dark");
    } else {
        localStorage.setItem(key, "light");
    }
};

function EnableDarkTheme() {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
}

function DisableDarkTheme() {
    btnDarkMode.classList.remove("dark-mode-btn--active");
    document.body.classList.remove("dark");
}
