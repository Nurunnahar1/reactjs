import { useState } from "react";
import "./Team.css";
import { data } from "./data/data";

const Team = () => {
  const [team, setTeam] = useState(data);
  return (
    <>
      {team.length > 0 ? (  
        <div className="team">
          {team.map((item, index) => (
            <div className="single-item" key={index}>
              <img src={item.photo} alt={item.name} />
              <h2>{item.name}</h2>
              <p>{item.skill}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No data found!</p>
      )}
    </>
  );
};
export default Team;
