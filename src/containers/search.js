import { connect } from 'react-redux';
import search from '../components/search';
import {showSearchWindow, changeEmployeeName} from '../actions';


const mapStateToProps = (state) => {
    return {
        windowForSearch: state.windowForSearch,
        employeeName: state.employeeName
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
        }

    }
};

const Search = connect(mapStateToProps, mapDispatchToProps)(search);

export default Search;