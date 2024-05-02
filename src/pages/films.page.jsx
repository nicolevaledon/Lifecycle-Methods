import { useEffect, useState } from "react";
import "./films.page.css";
import "./home.page.jsx";
import { filterFilmsByDirector, getListOf } from "../helpers/film.helpers.js";

function FilmsPage() {
  const [movies, setMovies] = useState([]);
  const [searchDirector, setSearchDirector] = useState("");
  useEffect(() => {
    fetch(`https://studioghibliapi-d6fc8.web.app/films`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        return setMovies(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const filmsByDirector = filterFilmsByDirector(movies, searchDirector);
  const allDirectors = getListOf(movies, "director");

  return (
    <>
      <h1>Studio Ghibli</h1>
      <form>
        <div className="form-group">
          <label htmlFor="searchDirector">Pick a Director</label>
          <select
            onChange={(event) => {
              setSearchDirector(event.target.value);
            }}
            name="searchDirector"
            id="searchDirector"
            value={searchDirector}
          >
            <option value="">All</option>
            {allDirectors.map((director, index) => {
              return (
                <option value={director} key={index}>
                  {director}
                </option>
              );
            })}
          </select>
        </div>
      </form>
      <p>Movies</p>
      <ul>
        {filmsByDirector.map((film) => {
          return (
            <li className="movie-card" key={film.id}>
              <div className="movie-left">
                <h2>{film.title}</h2>
                <img src={film.image} alt={`${film.title} banner`} />
              </div>
              <div className="movie-right">
                <p>{film.description}</p>
                <p>
                  {film.running_time}min - Rotten Tomatoes: {film.rt_score}%
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default FilmsPage;
