import React, { Component } from 'react';

class EditForm extends Component {
    render() {
        return (
            <div className="editFormBox">
                <form onSubmit={this.props.handleSubmit}>
                    <p>
                        <label>empName:</label>
                        <input type="text" value={this.props.empName}
                               onChange={this.props.handleChangeName} />
                    </p>

                    <p>
                        <label>empActive:</label>
                        <input type="checkbox" value={this.props.activity}
                               onChange={this.props.handleChangeActivity} />
                    </p>

                    <p>
                        <label>empDepartment:</label>
                        <input type="text" value={this.props.department}
                               onChange={this.props.handleChangDepartment} />
                    </p>
                    <input type="submit" value="Save" />
                    <input type="button" value="Cancel" onClick={() => console.log('cancel')}/>
                </form>
            </div>
        );
    }
}

export default EditForm;