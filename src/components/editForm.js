import React, { Component } from 'react';

class EditForm extends Component {
    render() {
        return (
            <div className="editFormBox">
                <form onSubmit={this.props.handleSubmit}>
                    <input type="text" style={{display: 'none'}} defaultValue={this.props.empId}/>

                    <p>
                        <label>empName:</label>
                        <input type="text" value={this.props.empName}
                               onChange={this.props.handleChangeName} />
                    </p>

                    <p>
                        <label>empActive:</label>
                        <input type="checkbox" value={this.props.empActive}
                               checked={(this.props.empActive === 'yes') ? true: false}
                               onChange={this.props.handleChangeActivity} />
                    </p>

                    <p>
                        <label>empDepartment:</label>
                        <input type="text" value={this.props.empDepartment}
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