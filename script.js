let searchBtn = document.getElementById("search-btn")
let countryInput = document.getElementById("country-input")
let result = document.getElementById("result")



searchBtn.addEventListener("click", () => {
    let countryName = countryInput.value;
    let API_URL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`

    // console.log(API_URL);

    fetch(API_URL)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            result.innerHTML = `
                <img src = "${data[0].flags.svg}" class = "flag-img"/>
                <h2>${data[0].name.common}</h2>
                <div className="container">
                    <div class= "data-container">
                        <h4>Capital:</h4>
                        <span>${data[0].capital[0]}</span>
                    </div>
                </div>
                <div className="container">
                    <div class= "data-container">
                        <h4>Continent:</h4>
                        <span>${data[0].continents[0]}</span>
                    </div>
                </div>
                <div className="container">
                    <div class= "data-container">
                        <h4>Population:</h4>
                        <span>${data[0].population}</span>
                    </div>
                </div>
                <div className="container">
                    <div class= "data-container">
                        <h4>Currency:</h4>
                        <span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)[0]}</span>
                    </div>
                </div>
                <div className="container">
                    <div class= "data-container">
                        <h4>Common Languages:</h4>
                        <span>${Object.values(data[0].languages).toString().split(",").join(", ")}</span>
                    </div>
                </div>
            `
        })
        .catch(() => {
            if(countryName.length === 0) {
                result.innerHTML = `
                    <h3>The Input field cannot be left empty</h3>
                `
            }
            else {
                result.innerHTML = `
                    <h3>Please enter a country name</h3>
                `
            }
        })
})