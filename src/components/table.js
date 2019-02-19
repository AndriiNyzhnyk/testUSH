import React, { Component } from 'react';
import Loader from '../loader/loader';
import axios from 'axios';

class Table extends Component {
    componentDidMount() {
        console.log(this.props);
        axios.get('/api/getDataForTable')
            .then( (response) => {
                this.props.setData(response.data);
            })
            .catch( (err) => {
                console.log(err);
                // this.props.setData(['dfdfd']);
            });
    }

    render() {
        return <div className="loader"><Loader/></div>
    }
}

export default Table;