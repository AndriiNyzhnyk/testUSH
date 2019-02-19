import { connect } from 'react-redux';
import ComponentTable from '../components/table';
import {setDataForTable} from '../actions';

const mapStateToProps = (state) => {
    return {
        state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setData: (data) => {
            dispatch(setDataForTable(data));
        }
    }
};

const Table = connect(mapStateToProps, mapDispatchToProps)(ComponentTable);

export default Table;