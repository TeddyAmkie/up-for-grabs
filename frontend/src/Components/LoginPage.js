import React from "react";
import LoginUI from "./LoginUI";
import Card from '@material-ui/core/Card'
import Container from '@material-ui/core/Container'


class LoginPage extends React.Component {
  render() {
    return (
      <Container >
        <LoginUI></LoginUI>
      </Container>
    );
  }
}

export default LoginPage;
