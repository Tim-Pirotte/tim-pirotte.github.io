init();

function init() {
    document
        .querySelectorAll("#window-icons div")
        .forEach(icon => icon.addEventListener("click", toggleErrorWindow));

    document.getElementById("close-window").addEventListener("click", toggleErrorWindow);
}

function toggleErrorWindow() {
    document.getElementById("error-window").classList.toggle("hide");
}
