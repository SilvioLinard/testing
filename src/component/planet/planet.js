import React, { Fragment, useState, useEffect } from "react";
import GrayImg from "../Shared/Gray_img";
import Description from "../Shared/DescriptionLinks/descriptionWhitLinks";
import Form from "../planet/formSatelites";
import { useParams, useNavigate } from "react-router-dom";

async function getPlanet(id) {
  let response = await fetch(`http://localhost:3000/api/${id}.json`);
  let data = await response.json();
  return data;
}
const SolarSystem = () => {
  const [satellites, setSattelites] = useState([]);
  const [planet, setPlanet] = useState({});
    
  let {id} = useParams();
  let history = useNavigate();

    useEffect(() => {
    getPlanet(id).then((data) => {
      setSattelites(data["satellites"]);
      setPlanet(data['data'])
    });
  }, [planet.id]);

  const goToPlanet = () =>{
    history('/');
  }

  const addSatellites = (new_Planet) => {
    setSattelites([...satellites, new_Planet]);
  };

  const { title, description, link, img_Url, gray } = planet;

  return (
    <Fragment>
      <hr />
      <h4>{title}</h4>
      <Description description={description} link={link} />
      <GrayImg img_Url={img_Url} gray={gray} />
      <h4>satellites</h4>
      <hr />
      <Form addSatellites={addSatellites} />
      <hr />
      <ul>
        {satellites.map((satellite) => (
          <li>{satellite.name}</li>
        ))}
      </ul>
      <button type="button" onClick={goToPlanet}>voltar ao inicio</button>
      <br/>
    </Fragment>
  );
};

export default SolarSystem;
