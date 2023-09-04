import React, { useState, useEffect } from "react";
import axios from "axios";

import KaydedilenlerListesi from "./Filmler/KaydedilenlerListesi";
import FilmListesi from "./Filmler/FilmListesi";
import Film from "./Filmler/Film";

import { Switch } from "react-router-dom";
import { Route } from "react-router-dom/cjs/react-router-dom.min";

export default function App() {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const FilmleriAl = () => {
      axios
        .get("http://localhost:5001/api/filmler") // Burayı Postman'le çalışın
        .then((response) => {
          // Bu kısmı log statementlarıyla çalışın
          // ve burdan gelen response'u 'movieList' e aktarın
          setMovieList(response.data);
        })
        .catch((error) => {
          console.error("Sunucu Hatası", error);
        });
    };
    FilmleriAl();
  }, []);

  const KaydedilenlerListesineEkle = (id) => {
    // Burası esnek. Aynı filmin birden fazla kez "saved" e eklenmesini engelleyin
  };

  return (
    <div>
      <KaydedilenlerListesi
        list={[
          /* Burası esnek */
          saved,
        ]}
      />

      <Switch>
        <Route path="/" exact>
          <FilmListesi movieList={movieList} />
        </Route>
        <Route path="/filmler/:id" exact>
          <Film KaydedilenlerListesineEkle={KaydedilenlerListesineEkle} />
        </Route>
      </Switch>
    </div>
  );
}
