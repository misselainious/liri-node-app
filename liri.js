require("dotenv").config();
// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
var axios = require("axios");

// var spotify = new Spotify(keys.spotify);

var Spotify = require('spotify-web-api-js');

// spotifyApi.setAccessToken('SPOTIFY_SECRET');

var options = new Spotify({
    id: "SPOTIFY_ID",
    secret: "SPOTIFY_SECRET"
});

// var spotifier = Spotify(options);

var command = process.argv[2];
var userInput = process.argv[3];

var userInputString = JSON.stringify(userInput);



if (command === "spotify-this-song") {

}

if(command === "movie-this"){
// Run a request with axios to the OMDB API with the movie title
axios.get("http://www.omdbapi.com/?t=" + userInputString + "&y=&plot=short&tomatoes=true&apikey=trilogy").then(
 function(response) {
     if (response.data.Title === undefined){
        axios.get("http://www.omdbapi.com/?t=Mr.+Nobody&y=&plot=short&apikey=trilogy").then(
  function(response) {
    console.log("If you haven't seen Mr. Nobody, you should...");
    console.log("Movie Title: " + response.data.Title);
    console.log("This movie came out in: " + response.data.Year);
    console.log("The movie's IMDB rating is: " + response.data.imdbRating);
    console.log("The movie's Tomato rating is: " + response.data.tomatoRating);
    console.log("The movie was produced in: " + response.data.Country);
    console.log("The movie's language is: " + response.data.Language);
    console.log("The movie's plot is: " + response.data.Plot);
    console.log("Actors in this movie are: " + response.data.Actors);
  }
);
     }
     else{
    console.log("Movie Title: " + response.data.Title);
    console.log("This movie came out in: " + response.data.Year);
    console.log("The movie's IMDB rating is: " + response.data.imdbRating);
    console.log("The movie's Tomato rating is: " + response.data.tomatoRating);
    console.log("The movie was produced in: " + response.data.Country);
    console.log("The movie's language is: " + response.data.Language);
    console.log("The movie's plot is: " + response.data.Plot);
    console.log("Actors in this movie are: " + response.data.Actors);
     }
  }
);
}
// var spotifyApi = new SpotifyWebApi();

// spotifyApi.setAccessToken('<here_your_access_token>');

// spotifyApi.setPromiseImplementation(Q);

