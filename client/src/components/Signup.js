import React, {useState} from 'react';
function Signup({onLogin}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
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
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

    return (  
       
    <form onSubmit={handleSubmit}>
      <div className="main">
        <div>
          <div>
            <h1>Signup</h1>
            <div>
              <input type="text" placeholder="user name" className="name" value={username}
          onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <br />
            <div>
              <input type="text" placeholder="email" className="name"value={email}
          onChange={(e) => setEmail(e.target.value)} />
            </div>
            <br />
            <div>
              <input type="text" placeholder="password" className="name" value={password}
          onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <br />
            <div>
              <input type="text" placeholder="password confirmation" className="name" value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)} />
            </div>
          </div>
        </div>
      </div>
    </form>
  
    );
}
 
export default Signup;