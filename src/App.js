import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Link } from '@reach/router';
import PinDetail from './components/PinDetail';

const App = () => {
  return (
    <React.Fragment>
      <h1>Hello Pinster Web 2.0!</h1>
      <Link to="pin/1234">Detail</Link>

      <Router>
        <PinDetail path="pin/:id" />
      </Router>
    </React.Fragment>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));
