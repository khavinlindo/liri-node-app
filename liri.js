
require("dotenv").config();

var keys = require("./keys.js");

var axios = require("axios");
var moment = require("moment");
var Spotify = require("node-spotify-api");
var fs = require("fs");

var spotify = new Spotify(keys.spotify);



//var arg1 = process.argv[2];
//var arg2 = process.argv[3];


/*concert-this*/
if (process.argv[2] === "concert-this") {
 var artist = process.argv.slice(3).join(" ");
 console.log(artist);
  
 axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
     .then(function(res) {
         //console.log(movie.length);
         var dateOfEvent = movie.datetime;
     
         for(i=0;i<movie.length;i++) {
            console.log("\n------------Event "+(i+1)+"----------\nName of the venue: "+movie[i].venue.name+
            "\nVenue location: "+movie[i].venue.city+", "+movie[i].venue.region+". "+movie[i].venue.country+
            "\nDate of the Event: "+moment(dateOfEvent).format("MM/DD/YYYY"));
         }  
     })
     .catch(function(err) {
         console.log(err);
     });
     
}

/*spotify-this-song*/
if (process.argv[2] === "spotify-this-song") {
   spotify
   .search({ type: "track", query: "Goodbyes" })
   .then(function(res) {
     console.log(res);
   })
   .catch(function(err) {
     console.log("Caught error: "+err);
   });

}

/*movie-this*/
if (process.argv[2] === "movie-this") {
    var film = process.argv.slice(3).join(" ");
    
    if (film) {
        axios.get("http://www.omdbapi.com/?t="+film+"&apikey=trilogy")
        .then(function(res) {
            var movie = res.data;
        //console.log(movie);
    console.log("\nTitle of the movie: "+movie.Title+"\nYear the movie came out: "+movie.Year+
    "\nIMDB Rating of the movie: "+movie.imdbRating+"\nRotten Tomatoes Rating of the movie: "+movie.Ratings[1].Value+
    "\nCountry where the movie was produced: "+movie.Country+"\nLanguage of the movie: "+movie.Language+"\nPlot of the movie: "
    +movie.Plot+"\nActors in the movie: "+movie.Actors+"\n");
    })
    .catch(function(err) {
        console.log("Caught error: "+err);
    }); 
  }   

  else {
      film = "Mr. Nobody"
    axios.get("http://www.omdbapi.com/?t="+film+"&apikey=trilogy")
    .then(function(res) {
        var movie = res.data;
    //console.log(movie);
        console.log("\nTitle of the movie: "+movie.Title+"\nYear the movie came out: "+movie.Year+
        "\nIMDB Rating of the movie: "+movie.imdbRating+"\nRotten Tomatoes Rating of the movie: "+movie.Ratings[1].Value+
        "\nCountry where the movie was produced: "+movie.Country+"\nLanguage of the movie: "+movie.Language+"\nPlot of the movie: "
        +movie.Plot+"\nActors in the movie: "+movie.Actors+"\n");
        })
        .catch(function(err) {
            console.log("Caught error: "+err);
        }); 
  }
}


/*do-what-it-says*/



