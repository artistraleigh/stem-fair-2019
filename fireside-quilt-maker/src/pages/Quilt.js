import React from 'react';
import { Link } from "react-router-dom";

const Quilt = () => {
  console.log("yay!");
  return (
    <div>
      Quilt here!
      <Link to="/">Add a new block</Link>
    </div>
  );
}

export default Quilt;
