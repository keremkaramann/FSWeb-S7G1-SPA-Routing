import React from "react";
import { useHistory } from "react-router-dom";

export default function KaydedilenlerListesi(props) {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <div className="saved-list">
      <h3>Kaydedilen Filmler:</h3>
      {props.list.map((movie, i) => (
        <span key={i} className="saved-movie">
          {movie.title}
        </span>
      ))}
      <div className="home-button" onClick={goBack}>
        Anasayfa
      </div>
    </div>
  );
}
