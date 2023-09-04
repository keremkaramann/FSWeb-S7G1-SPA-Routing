import React from "react";
import { Link } from "react-router-dom";

export default function FilmListesi(props) {
  return (
    <div className="movie-list">
      {props.movieList.map((movie) => (
        <Link to={`filmler/${movie.id}`} key={movie.id}>
          <FilmDetayları movie={movie} />
        </Link>
      ))}
    </div>
  );
}

function FilmDetayları(props) {
  const { title, director, metascore } = props.movie;

  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}
