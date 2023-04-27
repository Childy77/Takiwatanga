import React from "react";
import HeroImage from "../assets/Autism-Hands.png";

const Logo = () => {
return (
    <main>
    <div id="logo">
<img src={HeroImage} alt="autism hands"/>
<div className="title">
        <h1 className="Takiwatanga">TAKIWATANGA</h1>
  <div>
        <h2 className="share">-A place to share and inspire</h2>
        </div>
      </div>
</div>
</main>

)
}

export default Logo