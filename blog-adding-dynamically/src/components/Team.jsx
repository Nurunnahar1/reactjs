import { useState } from "react";
import "./Team.css";

const Team = () => {
  const [team, setTeam] = useState([]);
  const [name, setName] = useState("");
  const [skill, setSkill] = useState("");
  const [photo, setPhoto] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeSkill = (e) => {
    setSkill(e.target.value);
  };
  const handleChangePhoto = (e) => {
    setPhoto(e.target.value);
  };

  const handleInputAdd = () => {
    if (name !== "" || skill !== "" || photo !== "") {
      setTeam((prevState) => {
        return [{ name, skill, photo }, ...prevState];
      });
      setName("");
      setSkill("");
      setPhoto("");
    } else {
      alert("All fields are required !");
    }
  };
  return (
    <>
      <div className="form">
        <input
          type="text"
          onChange={handleChangeName}
          value={name}
          placeholder="name"
        />
        <input
          type="text"
          onChange={handleChangeSkill}
          value={skill}
          placeholder="skill"
        />
        <input
          type="text"
          onChange={handleChangePhoto}
          value={photo}
          placeholder="photo"
        />
        <button onClick={handleInputAdd}>Add</button>
      </div>
      <hr />
      <div className="team">
        {team.map((item, index) => {
          return (
            <div className="single-item" key={index}>
              <img src={item.photo} alt="" />
              <h2>{item.name} </h2>
              <p>{item.skill}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Team;
