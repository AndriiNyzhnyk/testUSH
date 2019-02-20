import { connect } from 'react-redux';
import createTable from '../components/createTable';
import {setAllDataForTable} from '../actions';

const mapStateToProps = (state) => {
    return {
        data: state.allDataForTable,
        isLoading: state.isLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setData: (data) => {
            dispatch(setAllDataForTable(data));
        }
    }
};

const CreateTable = connect(mapStateToProps, mapDispatchToProps)(createTable);

export default CreateTable;