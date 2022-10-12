import React, {useState, useEffect} from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Routes, Redirect } from "react-router-dom";
import Home from './Home';
import About from './About';
import Login from './Login';
import NavBar from './NavBar';


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/user").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;
  //  if (!user) return <Redirect to="/login"/>;
  


  return (
  
      
   <div>
    <div>
        <NavBar setUser={setUser}/>
      </div>
      <Routes>
       <Route exact path= '/home'  element={<Home/>} />
       <Route exact path= '/about' element={<About/>} />
      </Routes>
   </div>
  );
}

export default App;
