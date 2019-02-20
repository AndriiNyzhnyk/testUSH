import { connect } from 'react-redux';
import pagination from '../components/pagination';
import {setCurentPage} from '../actions';

const mapStateToProps = (state) => {
    return {
        allItems: state.allDataForTable,
        countPages: state.countPagesForPagination
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handlePageChange: ({selected}) => {
            // dispatch();
            console.log(selected);
            dispatch(setCurentPage(selected + 1));

        }
    }
};

const Pagination = connect(mapStateToProps, mapDispatchToProps)(pagination);

export default Pagination;