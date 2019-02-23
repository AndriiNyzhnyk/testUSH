import React, { Component } from 'react';

class EditForm extends Component {
    render() {
        return (
            <div className="editFormBox">
                <form onSubmit={this.props.handleSubmit.bind(null, this.props.temp)}>
                    <input type="text" style={{display: 'none'}} defaultValue={this.props.empId}/>

                    <p>
                        <label>empName:</label>
                        <input type="text" value={this.props.temp.empName}
                               onChange={this.props.handleChangeName} />
                    </p>

                    <p>
                        <label>empActive:</label>
                        <input type="checkbox" value={this.props.temp.empActive}
                               checked={(this.props.temp.empActive === 'yes') ? true: false}
                               onChange={this.props.handleChangeActivity} />
                    </p>

                    <p>
                        <label>empDepartment:</label>
                        <input type="text" value={this.props.temp.empDepartment}
                               onChange={this.props.handleChangDepartment} />
                    </p>
                    <input type="submit" value="Save" />
                    <input type="button" value="Cancel" onClick={this.props.handleCancelClick} />
                </form>
            </div>
        );
    }
}

export default EditForm;