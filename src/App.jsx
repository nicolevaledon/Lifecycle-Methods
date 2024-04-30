import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(`https://studioghibliapi-d6fc8.web.app/films`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        return setMovies(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <h1>Studio Ghibli</h1>
      <p>Movies</p>
      <ul>
        {movies.map((film) => {
          return (
            <li key={film.id}>
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

export default App;
