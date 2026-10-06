init();

function init() {
    const $button = document.getElementById("toggle-theme");
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme !== null && savedTheme == "minimal") {
        $button.textContent = "Original theme";
        document.body.classList.add("theme-minimal")
    }

    $button.addEventListener("click", _ => toggle($button));
}

function toggle($button) {
    if (document.body.classList.toggle("theme-minimal")) {
        $button.textContent = "Original theme";
        localStorage.setItem("theme", "minimal");
    } else {
        $button.textContent = "Minimal theme";
        localStorage.removeItem("theme");
    }
}
