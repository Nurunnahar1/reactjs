import { useState } from "react";
import "./Team.css";

const Team = () => {
    const [bg, setBg] = useState("red");
    const handleChangeBg = (bgColor) => {
        setBg(bgColor);
    }

  return (
    <>
      <div className="div" style={{ backgroundColor: bg }}>
        <div className="team">
          <h1>Our Team</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
            ea numquam delectus? Quaerat consequatur at natus itaque dignissimos
            soluta voluptates facilis? Animi cupiditate officiis, hic illo
            veniam ut. Ratione voluptate quam reiciendis minus, eaque magni sed
            recusandae tenetur amet aspernatur. Maxime veniam quia porro dolor
            praesentium consequuntur possimus recusandae odio.
          </p>
        </div>
        <div className="btn">
          <button onClick={() => handleChangeBg("red")}>Red</button>
          <button onClick={() => handleChangeBg("yellow")}>Yellow</button>
          <button onClick={() => handleChangeBg("purple")}>Purple</button>
          <button onClick={() => handleChangeBg("skyblue")}>SkyBlue</button>
          <button onClick={() => handleChangeBg("green")}>Green</button>
          <button onClick={() => handleChangeBg("blue")}>Blue</button>
        </div>
      </div>
    </>
  );
};
export default Team;
