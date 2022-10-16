import React, {useState} from 'react';
import {useNavigate} from "react-router-dom"

function Signup({onLogin}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
        email
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => {
          onLogin(user)
            navigate("/")
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

    return (  
       
    <form onSubmit={handleSubmit}>
      <div className="main">
        {errors.map((error) => {
          
         return <p key={error} style={{color: "white"}}>{error}</p>
        })}
        <div>
          <div>
            <h1>Signup</h1>
            <div>
              <input type="text" placeholder="user name" className="name" value={username}
          onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <br />
            <div>
              <input type="email" placeholder="email" className="name"value={email}
          onChange={(e) => setEmail(e.target.value)} />
            </div>
            <br />
            <div>
              <input type="password" placeholder="password" className="name" value={password}
          onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <br />
            <div>
              <input type="password" placeholder="password confirmation" className="name" value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)} />
            </div><br/>

            <input type="submit" className="button-1" value="Sign up"/>
  
          </div>
        </div>
      </div>
    </form>
  
    );
}
 
export default Signup;