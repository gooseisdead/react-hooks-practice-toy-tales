import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ api }) {

  const renderToys = api.map((toy) => 
    <ToyCard 
      key={toy.id}
      name={toy.name}
      image={toy.image}
      likes={toy.likes}
    /> )

  return (
    <div id="toy-collection">{renderToys}</div>
  );
}

export default ToyContainer;
