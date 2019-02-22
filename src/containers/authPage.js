import { connect } from 'react-redux';
import authPage from '../components/authPage';
import {setNewLogin, setNewPassword, redirectToApp} from '../actions';

const mapStateToProps = (state) => {
    return {
        login: state.login,
        password: state.password,
        auth: state.redirectToApp
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

        handlerChangeLogin: (e) => {
            let value = e.target.value;
            dispatch(setNewLogin(value));
        },

        handlerChangePassword: (e) => {
            let value = e.target.value;
            dispatch(setNewPassword(value));
        },

        redirect: (e) =>{
            dispatch(redirectToApp());
        }


    }
};

const AuthPage = connect(mapStateToProps, mapDispatchToProps)(authPage);

export default AuthPage;