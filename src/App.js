import React, { Component } from 'react';
import './styles/App.css';
import CreateTable from './containers/createTable';
import Pagination from './containers/pagination';
import EditForm from './containers/editForm';

class App extends Component {
  render() {
    return (
      <div className="container">
          <CreateTable/>
          <Pagination/>
          <EditForm/>
      </div>
    );
  }
}

export default App;
