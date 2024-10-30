import { useState } from "react";

const Students = () => {
  //create student method
  const [input, setInput] = useState({
    name: "",
    roll: "",
    email: "",
    phone: "",
    location: "",
  });
  const handleInputChange = (event) => {
    setInput((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <>
      <div className="student-area">
        <div className="student-form">
          <form action="">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={input.name}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Roll"
              name="roll"
              value={input.roll}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={input.email}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Phone"
              name="phone"
              value={input.phone}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Location"
              name="location"
              value={input.location}
              onChange={handleInputChange}
            />
            <button type="submit">Create New Student Data</button>
          </form>
        </div>
        <div className="student-data">
          <table>
            <thead>
              <th>#</th>
              <th>Name</th>
              <th>Roll</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Location</th>
              <th>Action</th>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Students;
