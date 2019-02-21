import { connect } from 'react-redux';
import ComponentTable from '../components/table';
import {setEditItem, deleteItemWithArr, setCountPages} from "../actions";
import axios from 'axios';

const mapStateToProps = (state) => {
    const countItemPerPage = 10; // options

    const indexOfLastTodo = state.currentPageForTable * countItemPerPage;
    const indexOfFirstTodo = indexOfLastTodo - countItemPerPage;
    const currentListForTable = state.allDataForTable.slice(indexOfFirstTodo, indexOfLastTodo);

    const countPages = Math.ceil(state.allDataForTable.length / countItemPerPage);


    return {
        data: currentListForTable,
        curentEditItem: state.curentEditItem,
        countPages
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        view: (e) => {
            console.log(e.target.parentNode);
            console.log('view');
        },

        editItem: (id, item) => {
            dispatch(setEditItem(id, item));
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

        },

        setCountPagesForPagination: (count) => {
            dispatch(setCountPages(count));
        }

    }
};

const Table = connect(mapStateToProps, mapDispatchToProps)(ComponentTable);

export default Table;