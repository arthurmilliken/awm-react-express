const { MyMovie } = require('./models/myMovie');

console.log('run: start');

const props = {
    "imdbID": "tt0078788",
    "Title": "Apocalypse Now",
    "Year": "1979",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDdhODg0MjYtYzBiOS00ZmI5LWEwZGYtZDEyNDU4MmQyNzFkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
};

let m = MyMovie.create(props);
console.log(m);
console.log('run: done!');
