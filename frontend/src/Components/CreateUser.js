import React, {useState} from 'react';
import make_request from '../APIcall';

function CreateUser() {

  const [accountType, setAccountType] = useState('');
  const [name, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {name, accountType, email, password}
    make_request('/users/', data, 'POST');
  }

    return (
      <div>
        <p>Create a User</p>
  
        <label>Username</label>
        <input name="name" onChange={e => setUsername(e.target.value)}></input>
        
  
        <label>Email</label>
        <input name="email" onChange={e => setEmail(e.target.value)}></input>
  
        <label>Account Type</label>
        <select onChange={e => setAccountType(e.target.value)} name="accountType">
            <option value="Charity">Charity</option>
            <option value="Business">Business</option>
            <option value="Indvidual">Indvidual</option>
          </select>

        <label>Password</label>
        <input name="password" onChange={e => setPassword(e.target.value)}></input>

      <button onClick={e => handleSubmit(e)}>Submit</button>
      </div>
    );
    
 
}

export default CreateUser;