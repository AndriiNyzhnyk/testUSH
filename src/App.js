import React, { Component } from 'react';
import './styles/App.css';
import MainContent from './containers/mainContent';



class App extends Component {
    render() {
        return (
            <div className="container mainContent">
                <MainContent/>
            </div>
        );
    }
}

export default App;
