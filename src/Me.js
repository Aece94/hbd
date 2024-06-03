import React from "react";
import './Me.css'
import { useState } from "react";

export const Me = () => {

  const [fimg,  setFimg] = useState({display:"visible"})
  const [simg,  setSimg] = useState({display:"none"})
  const handleImg =() =>{
    setFimg({display:"none"})
    setSimg({display:""})
  }

  return  <div className="red">
    
    <figure>
 
        <img className="img1" style={fimg} onClick={handleImg}
         src={require("D:\/mexs\/my-app\/src\/Pages\/11.png")} alt="hkuhhkhk" width={"50%"}
         />
        <img className="img2" style={simg}
         src={require("D:\/mexs\/my-app\/src\/Pages\/12.png")} alt="hkuhhkhk" width={"50%"}
         />
        
        </figure>
        
    </div>;
};

export default Me;
