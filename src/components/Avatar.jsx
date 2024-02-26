import React from "react";
import Paragraph from "./Paragraph";

const Avatar = (props) => {
    return <img className = "circle-img"
    src={props.img}
    alt="avatar_img"
  />
}

export default Avatar;