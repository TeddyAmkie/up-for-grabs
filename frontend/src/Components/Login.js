import React, {useState} from 'react';
import make_request from '../APIcall';

function SignIn() {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {email, password}
    let result = make_request('/users/', data, 'POST');
    console.log(result);
  }

    return (
      <div>
        <p>Sign In</p>    
  
        <label>Email</label>
        <input name="email" onChange={e => setEmail(e.target.value)}></input>
  

        <label>Password</label>
        <input name="password" onChange={e => setPassword(e.target.value)}></input>

      <button onClick={e => handleSubmit(e)}>Submit</button>
      </div>
    );
    
 
}

export default SignIn;