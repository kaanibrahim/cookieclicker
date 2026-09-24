function counterPlusOne() {
    // Get the current cookie count from the h2 element
    let counterElement = document.getElementById("counter");
    let currentCount = parseInt(counterElement.textContent.split(": ")[1]);

    // Increment the count by 1
    currentCount += 1;

    // Update the h2 element with the new count
    counterElement.textContent = "Cookies: " + currentCount;
}

function enLargeCookie() {
    let cookie = document.getElementById("cookie");
    cookie.classList.remove("cookie-clicked");

    // Force the animation to restart when the cookie is clicked repeatedly.
    void cookie.offsetWidth;
    cookie.classList.add("cookie-clicked");
}

