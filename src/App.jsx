import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../src/Redux/app/app.action";
import { getMovies } from "./Redux/movies/movies.actions";

function App() {
  const dispatch = useDispatch();
  const { loading, error, movies } = useSelector((store) => store.movies);
  const [search, setSearch] = useState("");
  useEffect(() => {
    dispatch(getMovies(search));
  }, [search]);

  return (
    <div>
      <h1>Homepage</h1>
      <input
        type='text'
        placeholder='search for movie'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {movies.map((ele, ind) => (
        <div key={ind}>
          <p>{ele.title}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
