import React, {useState, useEffect} from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Routes, Redirect } from "react-router-dom";
import Home from './Home';
import About from './About';
import LoginForm from './LoginForm';
import Signup from './Signup';
import NavBar from './NavBar';
import Login from './Login';


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
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
        <NavBar user={user} setUser={setUser}/>
      </div>
      <Routes>
       <Route exact path= '/'  element={<Home user={user} setUser={setUser}/>} />
       {/* <Route exact path= '/about' element={<About/>} /> */}
       <Route exact path= '/login' element={<LoginForm/>} />
       <Route exact path= '/signup' element={<Signup/>} />

      </Routes>
   </div>
  );
}

export default App;
