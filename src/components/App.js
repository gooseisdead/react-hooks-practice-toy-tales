import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3001/toys`)
    .then((resp) => resp.json())
    .then((toyArray) => {
      setToys(toyArray)
    })
  }, [])

  function handleNewToy(newToy) {
    const updatedToyArray = [...toys, newToy]
    setToys(updatedToyArray)
  }

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm localHandleNewToy={handleNewToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer api={toys} />
    </>
  );
}

export default App;
