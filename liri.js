require("dotenv").config();
// Axios package
var axios = require("axios");
// Spotify package
var Spotify = require('spotify-web-api-js');
// File System package
var fs = require('fs');

var apiKeys = require('./keys.js')

var spotifyID = apiKeys.spotify.id;
var spotifySecret = apiKeys.spotify.secret;

//Grab user input
var command = process.argv[2];
var userInput = process.argv[3];
var userInputString = JSON.stringify(userInput);


switch (command) {
    case "movie-this":
      moviethis();
      break;
    
    case "spotify-this-song":
      getSpotify();
      break;
    
    case "concert-this":
      bandsintown();
      break;
    
    case "do-what-it-says":
      rfmode();
      break;
    }
    

//BANDS IN TOWN
function bandsintown(){
axios.get("https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=codingbootcamp").then(
    function(response) {
        // console.log(response);
        console.log("Venue Name: " + response.data[0].venue.name);
        console.log("Location: " + response.data[0].venue.city);
        console.log("Venue Name: " + response.data[0].datetime);
     }
   );
    };

//MOVIE-THIS
function moviethis(){
// Run a request with axios to the OMDB API with the movie title
axios.get("http://www.omdbapi.com/?t=" + userInputString + "&y=&plot=short&tomatoes=true&apikey=trilogy").then(
 function(response) {
     // if response is undefined, return info for "Mr. Nobody"
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
     // Else find the movie the user entered
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
    });
}


//SPOTIFY
function getSpotify(){
    var options = new Spotify({
        id: spotifyID,
        secret: spotifySecret
    });
	console.log("Spotifying your artist...")
	console.log(userInputString);

	options.search({ type: 'track', query: userInputString }, function (err, data) {
	if (err) {
	  console.log('An error has occurred: ' + err)
	} else {
	for (let i = 0; i<data.tracks.items[0].artists.length; i++){
    	console.log("Artist: " + data.tracks.items[0].artists[i].name);
 	}
	console.log("Song Name: " + data.tracks.items[0].name);
 	console.log("Preview: " + data.tracks.items[0].preview_url);
   	console.log("Album Name: " + (data.tracks.items[0].album.name));
  }

  });
  
};


//DO WHAT IT SAYS:
function rfmode(){
fs.readFile("./random.txt", 
             {"encoding": "utf8"}, 
              function(err, data) {
     if (err)
        console.log(err);
     else {
         var contents = data;
         var splitRandom = contents.split(",");
            // command = splitRandom[1];
            // userInput = splitRandom[2];
            console.log(splitRandom);   
     }
 });
}