import React from "react";

const Paragraph = (props) => {

    return <div >
          <p className="info">{props.phone}</p> 
          <p className="info">{props.email}</p>   
    </div>
      

}
console.log(Paragraph)
export default Paragraph;