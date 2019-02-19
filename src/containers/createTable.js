import { connect } from 'react-redux';
import createTable from '../components/createTable';
import {setDataForTable} from '../actions';

const mapStateToProps = (state) => {
    return {
        data: state.dataForTable,
        isLoading: state.isLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setData: (data) => {
            dispatch(setDataForTable(data));
        }
    }
};

const CreateTable = connect(mapStateToProps, mapDispatchToProps)(createTable);

export default CreateTable;