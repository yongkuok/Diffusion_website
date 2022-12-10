import React from "react";
import { useParams } from "react-router-dom";

const Organisation = () => {
  const subTeam = useParams().team;
  return <div>{subTeam}</div>;
};

export default Organisation;
