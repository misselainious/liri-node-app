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

// Then run a request with axios to the OMDB API with the movie specified
axios.get("http://www.omdbapi.com/?t=" + userInputString + "&y=&plot=short&apikey=trilogy").then(
 function(response) {
    console.log("The movie's rating is: " + response.data.imdbRating);
  }
);
}
// var spotifyApi = new SpotifyWebApi();

// spotifyApi.setAccessToken('<here_your_access_token>');

// spotifyApi.setPromiseImplementation(Q);

// // Basic Node application for requesting data from the OMDB website via axios
// // Here we incorporate the "axios" npm package
// var axios = require("axios");

// // We then run the request with axios module on a URL with a JSON
// axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
//   function(response) {
//     // Then we print out the imdbRating
//     console.log("The movie's rating is: " + response.data.imdbRating);
//   }
// );

// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
// var axios = require("axios");

// // Then run a request with axios to the OMDB API with the movie specified
// axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
//   function(response) {
//     console.log("The movie's rating is: " + response.data.imdbRating);
//   }
// );
