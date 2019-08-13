
require("dotenv").config();

var keys = require("./keys.js");

var axios = require("axios");
var moment = require("moment");
var Spotify = require("node-spotify-api");
var fs = require("fs");

var spotify = new Spotify(keys.spotify);


var getConcertInfo = function(artist) {
  
 axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
     .then(function(res) {
        
        var band = res.data;
        var dateOfEvent = band.datetime;
         
        for(i=0;i<band.length;i++) {
            console.log("\n------------Event "+(i+1)+"----------\nName of the venue: "+band[i].venue.name+
            "\nVenue location: "+band[i].venue.city+", "+band[i].venue.region+". "+band[i].venue.country+
            "\nDate of the Event: "+moment(dateOfEvent).format("MM/DD/YYYY"));
         }  
     })
     .catch(function(err) {
         console.log("Caught error: " + err);
     });
}

var getMovie = function(film) {
    //var film = process.argv.slice(3).join(" ");
    
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

var getSong = function(song) {
spotify
   .search({ type: "track", query: song, limit: 1 })
   .then(function(res) {
     
     var track = res.tracks.items[0];
     var artists = [];
     //console.log(track.album.name);
     
    for (i=0;i<track.artists.length;i++) {
        artists.push(" "+track.artists[i].name);
    }

     console.log("\nArtist(s): "+artists+"\nName of song: "+track.name+"\nPreview link: "+track.external_urls.spotify+
     "\nAlbum: "+track.album.name);
     
   })
   .catch(function(err) {
     console.log("Caught error: "+err);
   });
}


/*concert-this*/
if (process.argv[2] === "concert-this") {
    var artist = process.argv.slice(3).join(" ");
     getConcertInfo(artist);
}

/*spotify-this-song*/
if (process.argv[2] === "spotify-this-song") {
    var song = process.argv.slice(3).join(" ");
   getSong(song);
}

/*movie-this*/
if (process.argv[2] === "movie-this") {
    var movie = process.argv.slice(3).join(" ");
   getMovie(movie);
}


/*do-what-it-says*/
if (process.argv[2] === "do-what-it-says") {
    fs.readFile("random.txt", "utf8", function(err, data) {
        if (err) {
            return console.log("Caught error: "+err);
        }

        var dataArr = data.split(",");
        var input = dataArr[1].substring(1, dataArr[1].length-1);

       switch(dataArr[0]) {
           case "\nmovie-this":
           var movie = dataArr[1];
           getMovie(movie);
           break;

           case "\nconcert-this":
           var artist = input;
           getConcertInfo(artist);
           break;

           case "\nspotify-this-song":
           var song = input;
           getSong(song);
           break;

           default:
            console.log("Please enter valid input");
       } 
    });
}

else {
    console.log("Please enter valid command");
}

