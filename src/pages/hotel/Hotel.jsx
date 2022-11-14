import React from "react";
import { useParams } from "react-router-dom";

function Hotel() {
  const { id } = useParams();
  console.log(id);
  return <div>Hotel - {id}</div>;
}

export default Hotel;
