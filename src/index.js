import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './store';
import AuthPage from './containers/authPage';

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<Provider store={store}>
    <Router>
        <Switch>
            <Route exact path="/" component={AuthPage} />
            <Route path="/app" component={App} />
            {/*<Route component={NotFound} />*/}
        </Switch>
    </Router>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

// ReactDOM.render(<Provider store={store}>
//     <App />
// </Provider>, document.getElementById('root'));