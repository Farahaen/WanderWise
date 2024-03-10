function buttonClicked() {
    var searchedData = document.getElementById("country").value;
    //fetch data
    fetch(`https://restcountries.com/v3.1/name/${searchedData}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            console.log(data[0].name.common);
            console.log(data[0].name.official);
            console.log(data[0].capital);
            console.log(data[0].currencies);
            console.log(data[0].region);
            console.log(data[0].subregion);
            console.log(data[0].languages);
            console.log(data[0].population);
            console.log(data[0].flags.png);
            console.log(data[0].flags.alt);
            console.log(data[0].capitalInfo.latlng);
            console.log(data[0].continents);
            //fetch language list that have different name inside language list for every data.
            const languages = data[0].languages;
            let languagesString = "";
            for (const langCode in languages) {
                if (Object.hasOwnProperty.call(languages, langCode)) {
                    const languageName = languages[langCode];
                    languagesString += `${languageName}, `;
                }
            }
            languagesString = languagesString.slice(0, -2);
            //fetch currencies list that have different name inside the currencies list for every data.
            const currencies = data[0].currencies;
            for (const currencyCode in currencies) {
                if (Object.hasOwnProperty.call(currencies, currencyCode)) {
                    const currency = currencies[currencyCode];
                    console.log("Name:", currency.name);
                    console.log("Symbol:", currency.symbol);
                }
            }
        var imageUrl = data[0].flags.png;
        //this is the informations that will be display after click user click enter
        document.getElementById("greet").innerHTML = "<hr><h1>Hello! Welcome to WanderWise. Here's the information for you:</h1><hr>";
        document.getElementById("countryname").innerHTML = "<h2>Country Name:</h2>" + data[0].name.common;
        document.getElementById("officialname").innerHTML = "<h2>Official Name:</h2> " + data[0].name.official;
        document.getElementById("capitalcity").innerHTML = "<h2>Capital City:</h2>  " + data[0].capital;
        document.getElementById("money").innerHTML = "<h2>Currencies:</h2>  " + data[0].currencies[Object.keys(data[0].currencies)[0]].name;
        document.getElementById("region").innerHTML = "<h2>Region:</h2>  " + data[0].region;
        document.getElementById("subregion").innerHTML = "<h2>Sub Region:</h2>  " + data[0].subregion;
        document.getElementById("languages").innerHTML = "<h2>Languages:</h2>  " + languagesString;
        document.getElementById("population").innerHTML = "<h2>Population:</h2>  " + data[0].population;
        document.getElementById("flag").innerHTML = "<h2>Flag:</h2> <br> " + `<img id="flagImg" src="${imageUrl}" alt="flag">`;
        flag.style.flex = "1";
        flag.style.padding = "10px";
        flag.style.border = "2px solid black";
        flag.style.borderRadius = "8px";
        flag.style.margin= "10px 10px 10px 10px";
        flag.style.backgroundColor = "#333";
        flag.style.color = "#fff";
        var flagImg = document.getElementById("flagImg");
        flagImg.style.border = "1px solid #333";
        document.getElementById("flagdesc").innerHTML = "<h2>Flag Description:</h2> " + data[0].flags.alt;
        document.getElementById("location").innerHTML = "<h2>Location (latitude and longitude):</h2> " + data[0].capitalInfo.latlng;
        document.getElementById("continent").innerHTML = "<h2>Continent:</h2> " + data[0].continents;
        document.getElementById("map").innerHTML = "<h2>Map Link:</h2><a href=" + data[0].maps.googleMaps + " style='color: #ffcc00;'>Link to the Google Map</a><br>";

        var rowContainers = document.querySelectorAll(".row1, .row2, .row3, .row4");
        // Apply styling to each row container
        rowContainers.forEach(function(container) {
        container.style.display = "flex";
        container.style.justifyContent = "space-between";
        });
        // Select all paragraphs within the row containers
        var rowParagraphs = document.querySelectorAll(".row1 p, .row2 p, .row3 p, .row4 p");
        // Apply styling to each paragraph
        rowParagraphs.forEach(function(element) {
        element.style.flex = "1";
        element.style.padding = "10px";
        element.style.border = "2px solid black";
        element.style.borderRadius = "8px";
        element.style.margin = "10px 10px 10px 10px";
        element.style.color = "#fff";
        element.style.backgroundColor = "#333";
        });
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
}
//image slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


