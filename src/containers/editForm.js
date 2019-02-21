import { connect } from 'react-redux';
import editForm from '../components/editForm';
import {
    changeName,
    changeActivity,
    changeDepartment,
    saveChangeUserData,
    hideEditForm
} from '../actions';

const mapStateToProps = (state) => {
    return {
        empId: state.temp.empId,
        empName: state.temp.empName,
        empActive: state.temp.empActive,
        empDepartment: state.temp.empDepartment
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleChangeName: (e) => {
            let value = e.target.value;

            dispatch(changeName(value));
        },

        handleChangeActivity: (e) => {
            // console.log(e.target.checked);
            dispatch(changeActivity(e.target.checked ? 'yes' : 'no'));
        },

        handleChangDepartment: (e) => {

            let value = e.target.value;
            // console.log(value);

            dispatch(changeDepartment(value));

        },

        handleCancelClick: () => {
            dispatch(hideEditForm());
        },

        handleSubmit: (e) => {
            e.preventDefault();

            dispatch(saveChangeUserData());
        }
    }
};

const EditForm = connect(mapStateToProps, mapDispatchToProps)(editForm);

export default EditForm;