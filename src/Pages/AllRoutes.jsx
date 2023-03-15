import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import SingleMovie from "./SingleMovie";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/:id' element={<SingleMovie />} />
    </Routes>
  );
};

export default AllRoutes;
