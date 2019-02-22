import { connect } from 'react-redux';
import mainContent from '../components/mainContent';
import {setAllDataForTable} from '../actions';
import '../styles/App.css';

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        showEditForm: state.showEditForm,
        signIn: state.redirectToApp
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