import React, { Component } from 'react';
import './styles/App.css';
import Table from './containers/table';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <Table/>
      </div>
    );
  }
}

export default App;
