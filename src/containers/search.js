import { connect } from 'react-redux';
import search from '../components/search';
import {
    showSearchWindow,
    changeEmployeeName,
    setCurrentDataForTable,
    stopSearch
} from '../actions';


const mapStateToProps = (state) => {
    return {
        windowForSearch: state.windowForSearch,
        employeeName: state.employeeName,
        allDataForTable: state.allDataForTable
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        showWindow: (data) => {
            dispatch(showSearchWindow(data));
        },

        handlerChangeParamSearch: (e) => {
            let newName = e.target.value;
            dispatch(changeEmployeeName(newName));
        },

        startSearch: (e, fir) => {

            let allDataForTable = e.props.allDataForTable;
            let name = e.props.employeeName;

            let currentDataForTable = allDataForTable.filter( (item) => {
                return item.empName.substring(0, name.length) === name;

            });

            console.log(currentDataForTable);

            dispatch(setCurrentDataForTable(currentDataForTable));

        },

        cancel: () => {
            dispatch(stopSearch());
        }

    }
};

const Search = connect(mapStateToProps, mapDispatchToProps)(search);

export default Search;