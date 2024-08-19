import "./Team.css";

import { team } from "../../data/data";

const Team = () => {
  return (
    <>
      <div className="team">
        <h1>{team.title}</h1>
        <p>{team.subtitle}</p>
        <div className="team-box">
          {team.members.map((item) => {
            return (
              <div className="team-item" key={item.id}>
                <img src={item.photo} alt="" />
                <h3>{item.name}</h3>
                <p>{item.skill}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Team;
