import { connect } from 'react-redux';
import ComponentTable from '../components/table';
import {setEditItem} from "../actions";

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

        delete: (e) => {
            console.log(e);
        }
    }
};

const Table = connect(mapStateToProps, mapDispatchToProps)(ComponentTable);

export default Table;