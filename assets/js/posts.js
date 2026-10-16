init();

function init() {
    const params = new URLSearchParams(window.location.search);
    const requestedLabel = params.get("label");
    const requestedSearch = params.get("search");

    if (requestedLabel) {
        const h1 = document.querySelector("h1");
        h1.textContent = `${requestedLabel} ${h1.textContent}`;

        document.querySelectorAll("#posts > ul > li").forEach((post) => {
            const labels = post.dataset.labels
                .split(",")
                .filter(Boolean);

            post.hidden = !labels.includes(requestedLabel);
        });
    } else if (requestedSearch) {
        const h1 = document.querySelector("h1");
        h1.textContent = `${h1.textContent} With "${truncate(requestedSearch, 16)}"`;

        const input = document.getElementById("search");
        input.value = requestedSearch;

        document.querySelectorAll("#posts > ul > li").forEach((post) => {
            const title = post.querySelector(".top > a").textContent;
            post.hidden = !normalize(title).includes(normalize(requestedSearch));
        });
    }

    const count = document.querySelectorAll("#posts > ul > li:not([hidden])").length;
    document.querySelectorAll(".posts-count").forEach(c => c.textContent = count);
    document.querySelector(".search-duration").textContent = getRandomArbitrary(0.15, 0.45).toFixed(2);
}

function normalize(text) {
    return text
        .toLowerCase()
        .replace(/[^0-9a-z]/gi, '');
}

function truncate(text, length) {
    if (text.length > length) {
        return text.substring(0, length - 1) + '…';
    }

    return text;
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
