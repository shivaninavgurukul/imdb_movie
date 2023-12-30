import React from "react";
import Card from "./Card";

const Results = ({ results }) => {
  const likeClick = (id) => {
    let moveIndex = results.findIndex((e) => e.id == id);
    console.log(moveIndex, results[moveIndex]);
  };
  return (
    <div style={{ width: "80%", margin: "auto" }}>
      {results &&
        results.map((result) => <Card key={result.id} result={result} />)}
    </div>
  );
};

export default Results;
