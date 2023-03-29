import { useState } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Movie from "./components/Movie";
import FavMovie from "./components/FavMovie";
import { useSelector, useDispatch } from "react-redux";
import { ADD_FAVORITE } from "./actions/favoriteAction";

function App() {
  const [sira, setSira] = useState(0);
  const movies = useSelector((store) => store.movieState.movies);
  const movie = movies[sira];
  const favMovies = useSelector((store) => store.favoriteState.favorites);
  const dispatch = useDispatch();

  function sonrakiFilm() {
    if (sira === 19) {
      setSira(0);
    } else {
      setSira(sira + 1);
    }
  }
  function beforeFilm() {
    if (sira === 0) {
      setSira(movies.length - 1);
    } else {
      setSira(sira - 1);
    }
  }
  function getInitialFilm() {
    setSira(0);
  }

  return (
    <div className="wrapper max-w-2xl mx-auto">
      <nav className="flex text-2xl pb-6 pt-8 gap-2 justify-center">
        <NavLink
          to="/"
          exact
          className="py-3 px-6 "
          activeClassName="bg-white shadow-sm text-blue-600"
        >
          Filmler
        </NavLink>
        <NavLink
          to="/listem"
          className="py-3 px-6 "
          activeClassName="bg-white shadow-sm text-blue-600"
        >
          Listem
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/">
          <Movie sira={sira} />

          <div className="flex flex-col gap-1 justify-center py-1">
            <div className="flex gap-3 justify-center pt-2">
              <button
                onClick={beforeFilm}
                className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
              >
                Önceki
              </button>
              <button
                onClick={sonrakiFilm}
                className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
              >
                Sıradaki
              </button>
              <button
                onClick={getInitialFilm}
                className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
              >
                Başa Dön
              </button>
            </div>
            <div className="flex gap-1 justify-center py-2">
              <button
                className="select-none px-12 py-2 bg-blue-700 hover:bg-blue-600 text-white"
                onClick={() => {
                  dispatch({ type: ADD_FAVORITE, payload: movie });
                }}
              >
                Listeme ekle
              </button>
            </div>
          </div>
        </Route>

        <Route path="/listem">
          <div>
            {favMovies.map((movie) => (
              <FavMovie key={movie.id} title={movie.title} id={movie.id} />
            ))}
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
