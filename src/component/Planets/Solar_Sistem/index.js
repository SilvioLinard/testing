import React, { Fragment, useState, useEffect } from "react";
import GrayImg from "../../Shared/Gray_img";
import Description from "../../Shared/DescriptionLinks/descriptionWhitLinks";
import Form from "./formSatelites";

async function getSatellites(id) {
  let response = await fetch(`http://localhost:3000/api/${id}.json`);
  let data = await response.json();
  return data;
}
const SolarSystem = (props)=>{
const [satellites, setSattelites]=useState([])

useEffect(()=> {
getSatellites(props.id).then((data) =>{
      setSattelites(data["satellites"])
});
  }, [props.id]);
  
  const addSatellites = (new_Planet) => {
    setSattelites([...satellites, new_Planet])
  }

    const { title, description, link, img_Url, gray } = props;

    return (
      <Fragment>
        <hr/>
        <h4>{title}</h4>
        <Description description={description} link={link} />
        <GrayImg img_Url={img_Url} gray={gray} />
        <h4>satellites</h4>
        <hr/>
      <Form addSatellites={addSatellites}/>
        <hr/>
        <ul>
          {satellites.map((satellite) => (
            <li>{satellite.name}</li>
          ))}
        </ul>
      </Fragment>
    );
  }


export default SolarSystem;
