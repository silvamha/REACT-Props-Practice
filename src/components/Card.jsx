import React from "react"
import Avatar from "./Avatar"
import Paragraph from "./Paragraph"


const Card = (props) => {
    return <div className="card">
    <div className="top">
      <h2 className = "name">{props.name}</h2>
      <Avatar img ={props.img}/>
      <Paragraph phone = {props.tel} />
      <Paragraph email = {props.email} />
    </div>
    <div className="bottom">
      
    </div>
  </div>
}

export default Card;
