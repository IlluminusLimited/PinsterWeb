import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Link } from '@reach/router';

import NavBar from './components/partials/NavBar';

import Home from './components/pages/Home';
import PinDetail from './components/pages/PinDetail';
import Styleguide from './components/pages/Styleguide';

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Router>
        <Home path="/" />
        <PinDetail path="/pin/:id" />
        <Styleguide path="/styleguide" />
      </Router>
    </React.Fragment>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));
