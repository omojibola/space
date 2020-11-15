import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import SigninPage from './pages/SigninPage';
import Navbar from '../src/components/Navbar/Navbar';
import Sidebar from '../src/components/Navbar/sidebar/Sidebar';
import SignUpPage from './pages/SignUpPage';
import { connect } from 'react-redux';
import ProfilePage from './pages/ProfilePage';

function App({ loggedIn }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  let routes;
  if (loggedIn) {
    routes = (
      <Router>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/profile" component={ProfilePage} exact />
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  } else {
    routes = (
      <Router>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />

        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/log-in" component={SigninPage} exact />
          <Route path="/sign-up" component={SignUpPage} exact />

          <Redirect to="/" />
        </Switch>
      </Router>
    );
  }

  return <div className="App">{routes}</div>;
}
const mapStateToProps = ({ firebase }) => ({
  loggedIn: firebase.auth.uid ? true : null,
});

export default connect(mapStateToProps)(App);
