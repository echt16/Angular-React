import React from 'react';
import Movie from './Movie.js';

function App() {
    const movie = {
        title: "Inception",
        director: "Christopher Nolan",
        releaseYear: 2010,
        cast: [
            "Leonardo DiCaprio",
            "Joseph Gordon-Levitt",
            "Elliot Page",
            "Tom Hardy",
            "Ken Watanabe"
        ],
        studio: "Warner Bros.",
        poster: "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg"
    };

    return (
        <div className="App">
            <h1>Favorite Movie</h1>
            <Movie {...movie} />
        </div>
    );
}

export default App;
