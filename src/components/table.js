import React from 'react';

export default (props) => (
    <table className="table">
        <thead>
        <tr>
            <th></th>
            <th></th>
            <th>#</th>
            <th>First</th>
            <th>Last</th>
            <th>Handle</th>
            <th></th>
        </tr>
        </thead>

        <tbody>
        {props.data.map( (item) => {
            return (
                <tr key={item.empId}>
                    <td className="underscore">View</td>
                    <td className="underscore">Edit</td>
                    <td>{item.empId}</td>
                    <td>{item.empName}</td>
                    <td>{item.empActive}</td>
                    <td>{item.empDepartment}</td>
                    <td className="underscore">Delete</td>
                </tr>
            )
        })}

        </tbody>
    </table>
);