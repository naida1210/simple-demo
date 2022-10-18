import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { axiosInstance } from './config';


const Update = () => {
  const [note, setNote] = useState({
    title: "",
    desc: "",
    
    cover: "",
  });
  const [error,setError] = useState(false)

  const location = useLocation();
  const navigate = useNavigate();

  const noteId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setNote((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axiosInstance.put(`/notes/${noteId}`, note);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  return (
    <div className="formContainer">
      <div className="formUpdate">
      <h1>Update the Note</h1>
      <input
        type="text"
        placeholder="Note title"
        name="title"
        onChange={handleChange}
      />
      <textarea
        rows={5}
        type="text"
        placeholder="Note desc"
        name="desc"
        onChange={handleChange}
      />
     
      <input
        type="date"
        placeholder="Enter Date"
        name="cover"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Update</button>
      {error && "Something went wrong!"}
      <Link to="/notes">See all Notes</Link>
      </div>
    </div>
  );
};

export default Update;