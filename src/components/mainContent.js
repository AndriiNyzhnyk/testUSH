import React, { Component } from 'react';
import Loader from '../loader/loader';
import Table from '../containers/table';
import EditForm from '../containers/editForm';
import Pagination from '../containers/pagination';
import axios from "axios";

class MainContent extends Component {

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
        if(this.props.isLoading) {
            return (
                <div className="mainContent">
                    <Table/>
                    <Pagination/>
                    <EditForm/>
                </div>
            );
        } else {
            return (<Loader/>);
        }
    }
}

export default MainContent;