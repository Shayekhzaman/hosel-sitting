import React from 'react';

const AllServiceList = ({ allList }) => {
    const { name, email, task, description } = allList;
    console.log();
    return (
        <div className="row" style={{marginBottom:'30px'}}>
            <div className="col-md-2">
            <td>{name}</td>
            </div>
            <div className="col-md-3">
            <td>{email}</td>
            </div>
            <div className="col-md-2">
            <td>{task}</td>
            </div>
            <div className="col-md-4">
            <td>{description}</td>
            </div>
            <div className="col-md-1">
                <td>done</td>
            </div>
           
        </div>




    );
};

export default AllServiceList;