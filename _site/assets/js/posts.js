init();

function init() {
    const params = new URLSearchParams(window.location.search);
    const requestedLabel = params.get("label");

    if (requestedLabel) {
        const h1 = document.querySelector("h1");
        h1.textContent = `${requestedLabel} ${h1.textContent}`;

        document.querySelectorAll("#posts > li").forEach((post) => {
            const labels = post.dataset.labels
                .split(",")
                .filter(Boolean);

            post.hidden = !labels.includes(requestedLabel);
        });
    }
}
