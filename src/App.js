import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom'

import routes from './routes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{display: 'flex', justifyContent: 'space-evenly', padding: 40}}>
          <Link to="/">Home</Link>
          <Link to="/store">Store</Link>
        </div>
        {routes}
      </div>
    );
  }
}

export default App;
