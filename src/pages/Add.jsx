import React from 'react'
import { Link, useNavigate  } from 'react-router-dom';
import { useState } from 'react';
import { axiosInstance } from './config';





const Add = () => {
    const [note, setNote] = useState({
        title: "",
        desc: "",
        cover: " ",
      });
      const [error,setError] = useState(false)
    
      const navigate = useNavigate();
    
      const handleChange = (e) => {
        setNote((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      };
    const handleClick = async (e) => {
        e.preventDefault();
     
        try {
          await axiosInstance.post("/notes", note);
          navigate("/notes");
        } catch (err) {
          console.log(err);
          setError(true)
        }
      };
   
  return (
    <div>
       <div className="container">
       <div className="form">
        <label htmlFor="title">Title:</label>
        <input type="text"  onChange={handleChange} name='title'  placeholder=' title'/>
        <label htmlFor="desc">Description:</label>
        <textarea name="desc" id="" cols="30" rows="10" onChange={handleChange}/>
        <label name="cover" htmlFor="date"></label>
        <input   type="date" placeholder="Enter Date" name="cover"
        onChange={handleChange} />
        <button onClick={handleClick}>ADD</button>
        {error && "Something went wrong!"}
        <Link to="/notes" style={{ color: "inherit", textDecoration: "none" }}>
          See all Plans </Link>
       </div>

     </div>



    </div>
  )
}

export default Add;