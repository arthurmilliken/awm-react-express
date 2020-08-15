/**
 * represents a movie the user saved to MyMovieList
 */
class MyMovie {
  constructor(props) {
    this.OmdbMovie = props.OmdbMovie;
    this.Watched = props.Watched == true ? true : false;
    this.Rating = props.Rating ? props.Rating : null;
    this.Comments = props.Comments ? props.Comments : [];
  }

  addComment(text) {
    // TODO: log action.
    this.Comments.push({
      TimeStamp: (new Date()).toISOString(),
      Text: text,
    });
  }

  rate(rating) {
    // TODO: log action.
    this.Rating = rating;
  }

  setWatched(watched) {
    // TODO: log action.
    this.Watched = watched;
  }
}

/**
 * represents a single entry in myMovieList
 */
class MyMovieListing {
  constructor(myMovie) {
    // OmdbMovie properties
    const omdbMovie = myMovie.omdbMovie;
    this.Title = omdbMovie.Title;
    this.Year = omdbMovie.Year;
    this.Rated = omdbMovie.Rated;
    this.Released = omdbMovie.Released;
    this.Runtime = omdbMovie.Runtime;
    this.Genre = omdbMovie.Genre;
    this.Director = omdbMovie.Director;
    this.Writer = omdbMovie.Writer;
    this.Actors = omdbMovie.Actors;
    this.Plot = omdbMovie.Plot;
    this.Language = omdbMovie.Language;
    this.Country = omdbMovie.Country;
    this.Awards = omdbMovie.Awards;
    this.Poster = omdbMovie.Poster;
    this.Ratings = omdbMovie.Ratings;
    this.Metascore = omdbMovie.Metascore;
    this.imdbRating = omdbMovie.imdbRating;
    this.imdbVotes = omdbMovie.imdbVotes;
    this.imdbID = omdbMovie.imdbID;
    this.Type = omdbMovie.Type;
    this.Response = omdbMovie.Response;

    // MyMovie properties.
    this.Watched = myMovie.Watched;
    this.Comments = myMovie.Comments;
    // Must clone Ratings so that adding user rating does not mutate the
    // underlying OmdbMovie object.
    this.Ratings = omdbMovie.Ratings.slice();
    if (myMovie.Rating) {
      this.Ratings.push({
        Source: 'MYSELF',
        Value: `${this.Rating}/10`,
      });
    }
  }
}

/**
 * MyMovieList is represented with a Map for fast retrieval by ID.
 */
class MyMovieList {
  constructor() {
    this.movies = new Map();
  }

  add(movie) {
    // TODO: log action.
    const id = movie.imdbID;
    this.movies.set(id, movie);
  }

  remove(id) {
    // TODO: log action.
    return this.movies.delete(id);
  }

  has(id) {
    return this.movies.has(id);
  }

  /**
   * Return movies as an array.
   * @param {string} sort can be: 'title asc' [default], 'title desc', 'year asc', 'year desc'
   * @param {boolean} watched filter by movie.Watched
   * @param {string} rating filter by user rating (or imdbRating if no user rating).
   *                 '1'  - '10': return movies matching this rating
   *                 '-2' - '-9': return movies with this rating or less
   *                 '+2' - '+9': return movies with this rating or greater.
   * @returns {Array} of MyMovieListing objects.
   */
  getList(sort, watched, rating) {
    const movies = Array.from(this.movies.values()).map(m => {
      new MyMovieListing(m)
    });
    // TODO: apply sort
    // TODO: apply watched filter
    // TODO: apply rating filter
    return movies;
  }
}

module.exports = {
  MyMovie,
  MyMovieListing,
  MyMovieList
};
