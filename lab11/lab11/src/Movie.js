import React from 'react';

function Movie(props) {
  let { title, director, releaseYear, cast, studio, poster } = props;
  return (
    <div className="movie">
      <h2>{title}</h2>
      <img src={poster} alt={`${title} poster`} />
      <p><strong>Director:</strong> {director}</p>
      <p><strong>Release Year:</strong> {releaseYear}</p>
      <p><strong>Studio:</strong> {studio}</p>
      <p><strong>Cast:</strong></p>
      <ul>
        {cast.map((actor, index) => (
          <li key={index}>{actor}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movie;