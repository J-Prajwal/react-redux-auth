import { useState, useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../src/Redux/app/app.action";

function App() {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getData());
  }, []);

  if (loading) {
    return <h1>Loading.....</h1>;
  }

  return (
    <div>
      <h1>Homepage</h1>
      {data.map((ele, ind) => (
        <p key={ind}>{ele.title}</p>
      ))}
    </div>
  );
}

export default App;
