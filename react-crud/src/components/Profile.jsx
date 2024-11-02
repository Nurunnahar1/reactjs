import axios from "axios";
import { useState } from "react";

const Profile = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileUpload = async(e) => {
    setPreview(URL.createObjectURL(e.target.files[0]));
    const form_data = new FormData();

    form_data.append("file",e.target.files[0]);
    form_data.append("upload_preset", "upload_image");

    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/dndizynno/image/upload",form_data
    );

  }
  return (
    <>
      <div className="profile-upload">
        <input type="file" onChange={handleFileUpload} />
        {preview && <img src={preview} alt="" />}
      </div>
    </>
  );
};

export default Profile;
