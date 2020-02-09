//Question: 1

//function(a, b) {
//return a - b;
//}

//to:

//const sum = (a, b) => a - b;





//Question: 2

//const sportsUrl = `https://api.rawg.io/api/games?genres=sports`;


//fetch(sportsUrl)
//.then(function(response) {

//return response.json();
//})
//.then(function(json) {
//loadsports(json);
//})
//.catch(function(error) {
//console.dir(error);

//});


//function loadsports(json) {
//const sports = json.results;
//for (let i = 0; i < sports.length; i++)
//console.dir(json.results[i].name);
//}





//Question: 3

//const genreHeading = document.querySelector("h1");


//const formattedGenres = genreHeading.innerText.replace("cats", "giraffes");
//genreHeading.innerText = formattedGenres;





//Question: 4


//const queryString = document.location.search;
//const params = new URLSearchParams(queryString);

//let id;

//sjekker om det er en bruker Id, om ikke sendes jeg til "thirdHtml"
//if (params.has("userId")) {
//id = params.get("userId");
//if (id < 10) {
//document.location.href = "first.html";
//} else {
//document.location.href = "second.html";
//}
//} else {
//document.location.href = "third.html";
//}




//Question: 5

//const container = document.querySelector(".container");
//const btn = document.querySelector(".btn")

//container.removeChild(btn);




//Question: 6


//const animal = document.createElement("li");

//animal.className = "parrot";

//animal.innerText = "Parrot";

//const parrotAnimal = document.querySelector(".animals .cows");

//parrotAnimal.after(animal);






//Question: 7


//const ratingGames = `https://api.rawg.io/api/games/3801`

//fetch(ratingGames)
//.then(function(response) {

//return response.json();
//})
//.then(function(json) {
//loadratings(json);
//})
//.catch(function(error) {
//console.dir(error);
//});

//function loadratings(json) {
//const ratings = document.querySelector(".rating");
//ratings.innerText = json.rating;

//}




//const genreHeading = document.querySelector("h1");


//const formattedGenres = genreHeading.innerText.replace("cats", "giraffes");
//genreHeading.innerText = formattedGenres;