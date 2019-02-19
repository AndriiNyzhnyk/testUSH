import React, { Component } from 'react';

class Table extends Component {
    constructor() {
        super();

        this.edit = this.edit.bind(this);
    }

    view(e) {
        console.log(e.target.parentNode);
        console.log('view');
    }

    edit(e) {
        let id = e.target.parentNode.id.split('_')[1];

        if(id !== this.props.curentEditItem) {
            this.props.setEditItem(id);
        }
    }

    delete(e) {
        console.log(e.target.parentNode);
        console.log('delete');
    }


    render() {
        return(<table className="table">
            <thead>
            <tr>
                <th></th>
                <th></th>
                <th>empID</th>
                <th>empName</th>
                <th>empActive</th>
                <th>empDepartment</th>
                <th></th>
            </tr>
            </thead>

            <tbody>
                {this.props.data.map( (item) => {
                    return (
                        <tr key={item.empId} id={`item_${item.empId}`} >
                            <td className="underscore" onClick={this.view}>View</td>
                            <td className="underscore" onClick={this.edit}>Edit</td>
                            <td>{item.empId}</td>
                            <td>{item.empName}</td>
                            <td>{item.empActive}</td>
                            <td>{item.empDepartment}</td>
                            <td className="underscore" onClick={this.delete}>Delete</td>
                        </tr>
                    )
                })}

            </tbody>
        </table>)
    }
};

export default Table;