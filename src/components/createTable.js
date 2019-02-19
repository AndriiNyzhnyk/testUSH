import React, { Component } from 'react';
import Loader from '../loader/loader';
import Table from '../containers/table'
import axios from 'axios';

class CreateTable extends Component {
    componentDidMount() {
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
        return(this.props.isLoading ? <Table/> : <Loader/>);
    }
}

export default CreateTable;