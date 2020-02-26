import React, { useState } from "react";
import UpForGrabsApi from "../APIcall";
import { Input, InputAdornment, IconButton, InputLabel } from "@material-ui/core/";
import AccountCircle from "@material-ui/icons/AccountCircle";
import EmailIcon from "@material-ui/icons/Email";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

function CreateUser() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    let data = { username, email, password };
    let token = await UpForGrabsApi.signup(data);
    console.log("result is", token);
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <form>
      <InputLabel htmlFor="username"></InputLabel>
      <Input
        fullWidth
        id="input-with-icon-adornment"
        startAdornment={
          <InputAdornment position="start">
            <AccountCircle />
          </InputAdornment>
        }
        onChange={e => setUsername(e.target.value)}
        placeholder="Username"
      ></Input>

      <InputLabel htmlFor="email"></InputLabel>
      <Input
        fullWidth
        id="input-with-icon-adornment"
        startAdornment={
          <InputAdornment position="start">
            <EmailIcon />
          </InputAdornment>
        }
        onChange={e => setEmail(e.target.value)}
        placeholder="E-mail"
      ></Input>

      <Input
        fullWidth
        id="standard-adornment-password"
        type={showPassword ? 'text' : 'password'}
        value={password}
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={e => setShowPassword(!showPassword)}
              onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />
      <button onClick={e => handleSubmit(e)}>Submit</button>
    </form >
  );
}

export default CreateUser;
