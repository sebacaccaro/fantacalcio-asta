import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import Aste from '../Containers/Aste';
import Home from '../Containers/Home';
import Welcome from '../Containers/Welcome';
import { UserContext } from '../provider/UserProvider';

function AuthSwitch() {
  const { user, pending } = useContext(UserContext);
  console.log(user);
  if (pending) {
    return (
      <div className='d-flex justify-content-center'>
        <div className='spinner-grow m-5' role='status'></div>
      </div>
    );
  }
  //USER AUTHENTICATED
  if (user) {
    return (
      <Switch>
        <Route path='/Aste'>
          <Aste></Aste>
        </Route>
        <Route path='/'>
          <Home></Home>
        </Route>
        {/*  <Route path='/preferences'>
        <Preferences />
      </Route> */}
      </Switch>
    );
    //USER NOT AUTHENTICATED
  } else {
    return (
      <Switch>
        <Route path='/'>
          <Welcome></Welcome>
        </Route>
        {/*  <Route path='/preferences'>
              <Preferences />
            </Route> */}
      </Switch>
    );
  }
}

export default AuthSwitch;
