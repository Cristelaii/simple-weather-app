const searchForm = document.querySelector("#search-form");
const cityInput = document.querySelector("#city-input");

searchForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const city = cityInput.value.trim();

    console.log("City searched:", city);
});
