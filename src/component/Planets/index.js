import React, { Fragment, useState, useEffect } from "react";
import SolarSistem from "./Solar_Sistem";
import Form from "./form";

async function getPlanets() {
  let response = await fetch("http://localhost:3000/api/planets.json");
  let data = await response.json();
  return data;
}

const Planets = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    getPlanets().then((data) => {
      setPlanets(data["planets"]);
    });
  }, []);

  const addPlanet = (new_Planet) => {
    setPlanets([...planets, new_Planet])
  }

  return (
    <Fragment>
      <h4>Planet List</h4>
      <hr/>
      <Form addPlanet={addPlanet}/>

      {planets.map((planet, index) => (
        <SolarSistem
          key={index}
          id={planet.id}
          title={planet.title}
          description={planet.description}
          link={planet.link}
          img_Url={planet.img_Url}
        />
      ))}
      <hr />
    </Fragment>
  );
};

export default Planets;



/// EXEMPLOS DE BUTONS//

/*
  const removeLast = () => {
    let removePlanets = [...planets];
    removePlanets.pop();
    setPlanets(removePlanets);
  };

  const duplicatePlanets = () => {
    let last_planet = planets[planets.length - 1];
    setPlanets([...planets, last_planet]);
  };
      <button onClick={removeLast}>Remove Last</button>
      <button onClick={duplicatePlanets}>Duplicate Last</button>
  */