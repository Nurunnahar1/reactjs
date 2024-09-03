import { useState } from "react";
import "./Blog.css";

const Blog = () => {
  const [blog, setBlog] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [photo, setPhoto] = useState("");

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeDesc = (e) => {
    setDesc(e.target.value);
  };
  const handleChangePhoto = (e) => {
    setPhoto(e.target.value);
  };

  const handleInputAdd = () => {
    if (title !== "" || desc !== "" || photo !== "") {
      setBlog((prevState) => {
        return [{ title, desc, photo }, ...prevState];
      });
      setTitle("");
      setDesc("");
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
          onChange={handleChangeTitle}
          value={title}
          placeholder="title"
        />
        <input
          type="text"
          onChange={handleChangeDesc}
          value={desc}
          placeholder="description"
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
      <h1>Blog</h1>
      <div className="team">
        {blog.map((item, index) => {
          return (
            <div className="single-item" key={index}>
              <img src={item.photo} alt="" />
              <h2>{item.title} </h2>
              <p>{item.desc}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Blog;
