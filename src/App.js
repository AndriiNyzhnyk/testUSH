import React, { Component } from 'react';
import './styles/App.css';
import CreateTable from './containers/createTable';

class App extends Component {
  render() {
    return (
      <div className="container">
        <CreateTable/>
      </div>
    );
  }
}

export default App;
