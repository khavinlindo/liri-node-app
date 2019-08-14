# liri-node-app

### Description

This app uses a CLI interface to take in commands from a user. The user has an option of four commands to choose from: 

   * `concert-this`

   * `spotify-this-song`

   * `movie-this`

   * `do-what-it-says`




### What Each Command Does

1. `node liri concert-this <artist/band name here>`

    * When the user runs the app, if the input command is `concert-this`, the next argument required is the name of an artist/band. Once entered, the app renders the following information about each event to the terminal:

        * Name of the venue

        * Venue location

        * Date of the Event (use moment to format this as "MM/DD/YYYY")


    * If no name of band/artist is provided, the app returns default message prompting the user to enter a band name. 

    ![concert-this](/images/concert-this.JPG)



 2. `node liri spotify-this-song '<song name here>'`
 
    * When the user runs the app, if the input command is `spotify-this-song`, the next argument required is the name of track/song. Once entered, the app renders the following information to the terminal:

        * Artist(s)

        * The song's name

        * A preview link of the song from Spotify

        * The album that the song is from

    * If no song is provided then the app will default to "The Sign" by Ace of Base. 

    ![spotify-this-song](/images/spotify-this-song.JPG)



3. `node liri movie-this '<movie name here>'`

    * When the user runs the app, if the input command is `movie-this`, the next argument required is the name of a movie. Once entered, the app renders the following information to the terminal:

         ```
       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.
        ```

    * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

    ![movie-this](/images/movie-this.JPG)

4. `node liri do-what-it-says`

    * When the user runs the app, if the input command is `do-what-it-says`, no other argument is required. The app will take the text from inside a .txt file provided, and then use it to call one of the other three previous commands.

    ![do-what-it-says](/images/do-what-it-says.JPG)


### No Commands

* If none of the 4 commands are provided by user, the app will prompt for a valid command.

![invalid-command](/images/invalid-command.JPG)
