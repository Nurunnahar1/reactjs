import { useState } from "react";
import "./Team.css";

const Team = () => {
  const [bg, setBG] = useState("white");
  const handleBackgroundColor = (bgColor) => {
    setBG(bgColor);
  };
  return (
    <>
      <div className="team" style={{ backgroundColor:bg }}>
        <div className="single-item">
          <img
            src="https://images.news18.com/webstories/2023/09/Wazhma-Ayoubi-2.jpg"
            alt=""
          />
          <h1>Lorem ipsum dolor</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            ratione in, eligendi soluta reprehenderit, aliquid hic, quis ipsam
            velit autem reiciendis saepe alias? Harum commodi repellendus,
            quisquam provident sint laudantium!
          </p>
        </div>
        <div className="single-item">
          <img
            src="https://images.news18.com/webstories/2023/09/Wazhma-Ayoubi-2.jpg"
            alt=""
          />
          <h1>Lorem ipsum dolor</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            ratione in, eligendi soluta reprehenderit, aliquid hic, quis ipsam
            velit autem reiciendis saepe alias? Harum commodi repellendus,
            quisquam provident sint laudantium!
          </p>
        </div>
        <div className="single-item">
          <img
            src="https://images.news18.com/webstories/2023/09/Wazhma-Ayoubi-2.jpg"
            alt=""
          />
          <h1>Lorem ipsum dolor</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            ratione in, eligendi soluta reprehenderit, aliquid hic, quis ipsam
            velit autem reiciendis saepe alias? Harum commodi repellendus,
            quisquam provident sint laudantium!
          </p>
        </div>
      </div>

      <div className="button">
        <button className="red" onClick={() => handleBackgroundColor("red")}>
          Red
        </button>
        <button
          className="yellow"
          onClick={() => handleBackgroundColor("yellow")}
        >
          Yellow
        </button>
        <button className="blue" onClick={() => handleBackgroundColor("blue")}>
          Blue
        </button>
        <button
          className="skyblue"
          onClick={() => handleBackgroundColor("skyblue")}
        >
          SkyBlue
        </button>
        <button className="pink" onClick={() => handleBackgroundColor("pink")}>
          Pink
        </button>
        <button
          className="white"
          onClick={() => handleBackgroundColor("white")}
        >
          White
        </button>
      </div>
    </>
  );
};

export default Team;
