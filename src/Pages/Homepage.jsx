import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../Redux/movies/movies.actions";
import { Link } from "react-router-dom";

function Homepage() {
  const dispatch = useDispatch();
  const { movies } = useSelector((store) => store.movies);
  const [search, setSearch] = useState("");
  useEffect(() => {
    dispatch(getMovies(search));
  }, [search]);

  return (
    <div>
      <h1>Homepage</h1>
      <input
        type='text'
        placeholder='Search for movie'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {movies.map((ele, ind) => (
        <div key={ind}>
          <Link to={`/${ele.id}`}>
            <p>{ele.title}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Homepage;
