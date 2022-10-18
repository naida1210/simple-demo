
import './App.css';
import {BrowserRouter, Routes, Route}  from "react-router-dom";
import Add from './pages/Add';
import Notes from './pages/Notes';
import Navbar from './pages/Navbar';
import Update from './pages/Update';

function App() {
  





  return (
    <div className="App">
        <Navbar/>
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Notes/>} /> 
        <Route path="/notes" element={<Notes/>} />
        <Route path="/add" element={<Add/>} />
        <Route path="/update" element={<Update/>} />
       
      </Routes>

     </BrowserRouter>
    </div>
  );
}

export default App;
