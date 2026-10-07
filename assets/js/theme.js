const THEMES = [
    {
        "name": "default",
        "button_text": "Original theme",
    },
    {
        "name": "minimal",
        "button_text": "Minimal theme",
    },
]

init();

function init() {
    const $button = document.getElementById("toggle-theme");
    let savedThemeName = localStorage.getItem("theme");

    if (savedThemeName === null) {
        savedThemeName = THEMES[0].name;
    }

    const savedThemeIndex = getThemeIndexByName(savedThemeName);
    const savedTheme = THEMES[savedThemeIndex];

    document.body.dataset.theme = savedTheme.name;

    const nextThemeIndex = (savedThemeIndex + 1) % THEMES.length;
    const nextTheme = THEMES[nextThemeIndex];

    $button.textContent = nextTheme.button_text;
    $button.addEventListener("click", _ => next($button));
}

function next($button) {
    const previousTheme = document.body.dataset.theme;
    const currentThemeIndex = (getThemeIndexByName(previousTheme) + 1) % THEMES.length;
    const currentTheme = THEMES[currentThemeIndex];

    document.body.dataset.theme = currentTheme.name;
    localStorage.setItem("theme", currentTheme.name);

    const nextTheme = THEMES[(currentThemeIndex + 1) % THEMES.length];
    $button.textContent = nextTheme.button_text;
}

function getThemeIndexByName(name) {
    return THEMES.findIndex((theme) => theme.name === name);
}
