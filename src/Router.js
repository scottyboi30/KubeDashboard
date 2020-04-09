import React from 'react';
import {Scene, Router, Drawer, Overlay} from 'react-native-router-flux';
import {Icon} from 'native-base';

import Chart from './components/Chart';
import Menu from './components/Menu';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Signup from './pages/Signup';

const RouterComponent = () => {
  return (
    <Router>
      <Overlay key="overlay">
        <Scene key="root">
          <Scene title="Login" component={Login} />
          <Scene key="signup" title="Signup" component={Signup} />
          <Drawer
            hideNavBar
            contentComponent={Menu}
            drawerPosition="left"
            drawerWidth={300}
            drawerIcon={<Icon name="ios-menu" />}>
            <Scene key="main" title="Kubernetes Express" component={Chart} />
            <Scene key="profile" title="Profile" component={Profile} />
          </Drawer>
        </Scene>
      </Overlay>
    </Router>
  );
};

export default RouterComponent;
