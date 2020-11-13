import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SigninPage from './pages/SigninPage';
import Navbar from '../src/components/Navbar/Navbar';
import Sidebar from '../src/components/Navbar/sidebar/Sidebar';
import SignUpPage from './pages/SignUpPage';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="App">
      <Router>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />

        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/log-in" component={SigninPage} exact />
          <Route path="/sign-up" component={SignUpPage} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
