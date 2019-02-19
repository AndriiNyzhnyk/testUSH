import { connect } from 'react-redux';
import ComponentTable from '../components/table';
import {setDataForTable} from '../actions';

const mapStateToProps = (state) => {
    return {
        data: state.dataForTable
    };
};

const Table = connect(mapStateToProps)(ComponentTable);

export default Table;