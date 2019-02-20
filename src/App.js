import React, { Component } from 'react';
import './styles/App.css';
import CreateTable from './containers/createTable';
import Pagination from './containers/pagination'

class App extends Component {
  render() {
    return (
      <div className="container">
        <CreateTable/>
        <Pagination/>
      </div>
    );
  }
}

export default App;
