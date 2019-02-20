import { connect } from 'react-redux';
import ComponentTable from '../components/table';
import {setEditItem, deleteItemWithArr} from "../actions";
import axios from 'axios';

const mapStateToProps = (state) => {
    return {
        data: state.dataForTable,
        curentEditItem: state.curentEditItem
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        view: (e) => {
            console.log(e.target.parentNode);
            console.log('view');
        },

        editItem: (id) => {
            dispatch(setEditItem(id));
        },

        deleteItem: (e) => {
            let index = e.target.parentNode.id.split('_')[1];

            axios.delete(`/api/deleteItem/${index}`, {})
                .then( () => {
                    console.log('delete ' + index + ' container');
                    dispatch(deleteItemWithArr(index));

                }).catch( (err) => {
                console.log(err);
            });

        }
    }
};

const Table = connect(mapStateToProps, mapDispatchToProps)(ComponentTable);

export default Table;