import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleMovie = () => {
  const { id } = useParams();
  const [range, setRange] = useState(0);
  const handleOnChange = (e) => {
    setRange(e.target.value);
  };
  return (
    <div>
      <input onChange={handleOnChange} value={range} type='range' />
      <h1>{range}</h1>
      <h1>single movie page</h1>
    </div>
  );
};

export default SingleMovie;
