import { connect } from 'react-redux';
import ComponentTable from '../components/table';
import {setEditItem, deleteItem} from "../actions";

const mapStateToProps = (state) => {
    return {
        data: state.dataForTable,
        curentEditItem: state.curentEditItem
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        view: (e) => {
            console.log(e.target.parentNode.refs);
        },

        setEditItem: (item) => {
            dispatch(setEditItem(item));
        },

        deleteItem: (index) => {
            dispatch(deleteItem(index - 1));
        }
    }
};

const Table = connect(mapStateToProps, mapDispatchToProps)(ComponentTable);

export default Table;