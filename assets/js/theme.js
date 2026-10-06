init();

function init() {
    const $button = document.getElementById("toggle-theme");
    $button.addEventListener("click", _ => toggle($button));
}

function toggle($button) {
    if (document.body.classList.toggle("theme-minimal")) {
        $button.textContent = "Original theme";
    } else {
        $button.textContent = "Minimal theme";
    }
}
