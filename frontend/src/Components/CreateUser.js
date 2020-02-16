import React, {useState, Dropdown} from 'react';
import {CustomToggle, CustomMenu} from './CustomToggle'

function CreateUser() {

  const [accountType, setAccountType] = useState('');
  const [name, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

  
      </div>
    );
    
 
}

export default CreateUser;