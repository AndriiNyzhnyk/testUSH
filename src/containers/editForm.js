import { connect } from 'react-redux';
import editForm from '../components/editForm';
import axios from 'axios';
import {
    changeName,
    changeActivity,
    changeDepartment,
    saveChangeUserData,
    hideEditForm
} from '../actions';

const mapStateToProps = (state) => {
    return {
        temp: state.temp
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

        handleSubmit: (data, e) => {
            e.preventDefault();

            console.log(data);
            axios.put('/api/update', {
                data: data
            }).then( () => {
                dispatch(saveChangeUserData());

            }).catch( (err) =>{
                console.log(err);
            });


        }
    }
};

const EditForm = connect(mapStateToProps, mapDispatchToProps)(editForm);

export default EditForm;