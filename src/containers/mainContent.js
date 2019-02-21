import { connect } from 'react-redux';
import mainContent from '../components/mainContent';
import {setAllDataForTable} from '../actions';


const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        showEditForm: state.showEditForm
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setData: (data) => {
            dispatch(setAllDataForTable(data));
        }
    }
};

const MainContent = connect(mapStateToProps, mapDispatchToProps)(mainContent);

export default MainContent;