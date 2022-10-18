import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import { Link } from "react-router-dom";
import "../App.css";
import { axiosInstance } from "./config";




const Notes= () => {
  const [notes, setNotes] = useState([]);
 


  useEffect(() => {
    const fetchAllToDos = async () => {
      try {
        const res = await axiosInstance.get("/notes");
        setNotes(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllToDos();
  }, []);

  console.log(notes);

  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/notes/${id}`);
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  };

  return (
   <div className="containerNotepage">
   
    <div className="NotePage">
      <div className="notes animationDelete">
        {notes.map((note) => (
          <div key={note.id} className="note">
           
            <p>{note.cover}</p>
            <h2>{note.title}</h2>
            <h4>{note.desc}</h4>
            <button className="delete" onClick={() => handleDelete(note.id)}>Delete</button>
          
            <button className="update">
              <Link
                to={`/update/${note.id}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Update
              </Link>
            </button>
          </div>
        ))}
      </div>

    <button className="addNote">
        <Link to="/add" style={{ color: "inherit", textDecoration: "none" }}>
          Add new Plan
        </Link>
      </button>
    </div>
    </div>
  );
};

export default Notes;