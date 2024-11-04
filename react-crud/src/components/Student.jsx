import axios from "axios";
import { useEffect, useState } from "react";
import { cloudUpload } from "../utils/Cloudinary";

const Students = () => {
  //create student method
  const [input, setInput] = useState({
    photo: "",
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

  //image upload
  const [file, setFile] = useState(null);

  const handelStudentFormSubmit = async (event) => {
    event.preventDefault();
    // console.log(input);
    const fileData = await cloudUpload({
      file: file,
      preset: "upload_image",
      cloudName: "dndizynno",
    });
    // console.log(fileData);

    await axios.post("http://localhost:5050/students", {
      ...input,
      photo: fileData.secure_url,
    });
    setInput({
      name: "",
      roll: "",
      email: "",
      phone: "",
      location: "",
    });
    getAllStudents();
  };

  //show student data
  const [student, setStudent] = useState([]);

  const getAllStudents = async () => {
    const response = await axios.get("http://localhost:5050/students");
    setStudent(response.data);
  };

  //update student data
  const [updateForm, setUpdateForm] = useState(false);

  const handleStudentEdit = async (id) => {
    setUpdateForm(true);
    const response = await axios.get(`http://localhost:5050/students/${id}`);
    setInput(response.data);
  };

  //submit update student data
  const handelStudentUpdateFormSubmit = async (event) => {
    event.preventDefault();
    await axios.put(`http://localhost:5050/students/${input.id}`, {
      name: input.name,
      roll: input.roll,
      email: input.email,
      phone: input.phone,
      location: input.location,
    });
    getAllStudents();
    setInput({
      name: "",
      roll: "",
      email: "",
      phone: "",
      location: "",
    });
    setUpdateForm(false);
  };

  //delete student data
  const handleStudentDelete = async (id) => {
    await axios.delete(`http://localhost:5050/students/${id}`);
    getAllStudents();
  };

  useEffect(() => {
    getAllStudents();
  }, []);

  return (
    <>
      <div className="student-area">
        <div className="student-form">
          {!updateForm && (
            <div className="create-new-data">
              <h2>Create New Student Data</h2>
              <form onSubmit={handelStudentFormSubmit}>
                <input
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])} 
                 
                />
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
                <button type="submit">Save</button>
              </form>
            </div>
          )}

          {updateForm && (
            <div className="update-new-data">
              <h2>Update Student Data</h2>
              <button onClick={() => setUpdateForm(false)}>
                Back to Create form
              </button>
              <form onSubmit={handelStudentUpdateFormSubmit}>
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
                <button type="submit">Update</button>
              </form>
            </div>
          )}
        </div>
        <div className="student-data">
          <table>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Roll</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Location</th>
              <th>Action</th>
            </tr>

            {student.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      style={{
                        width: "70px",
                        height: "70px",
                        borderRadius: "50px ",
                        objectFit: "cover",
                      }}
                      src={item.photo}
                      alt=""
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.roll}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.location}</td>
                  <td>
                    <button
                      onClick={() => {
                        handleStudentEdit(item.id);
                      }}
                    >
                      Edit
                    </button>
                    <button onClick={() => handleStudentDelete(item.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
};

export default Students;
