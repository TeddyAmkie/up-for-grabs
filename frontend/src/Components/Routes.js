import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import Home from './Home';
import Listing from './Listing';
import LoginPage from './LoginPage';

class Routes extends React.Component {

render (){
  return (
    <Switch>
      <Route exact path="/" render={props => (<Home/>)}/>
      <Route exact path="/login" render={props => (<LoginPage/>)}/>
      <Route exact path="/listing" render={props => (<Listing/>)}/>
      <Route exact path="/listing/:lid" render={props => (<Listing/>)}/>
      <Redirect to="/"/>
    </Switch>
  );
}
 
}

export default Routes;
