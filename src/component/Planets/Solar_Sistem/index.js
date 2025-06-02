import React, { Fragment, useState, useEffect } from "react";
import GrayImg from "../../Shared/Gray_img";
import Description from "../../Shared/DescriptionLinks/descriptionWhitLinks"
import { Link } from "react-router-dom";

const SolarSystem = (props)=>{

    const { title, description, link, img_Url, gray } = props;

    return (
      <Fragment>
        <hr/>
        <h4><Link to={`/planet/${props.id}`}> {title}</Link></h4>
        <Description description={description} link={link} />
        <GrayImg img_Url={img_Url} gray={gray} />

      </Fragment>
    );
  }
export default SolarSystem;

