import React from 'react';
import './MyService.css';

const MyService = ({ service }) => {
    const { img, task, description, _id } = service;
    if(img == null){

    }
    return (
        <div className="col-md-6 col-lg-6 col-sm-12">
            <div className="card">

                <img className="myServiceImg" src={require(`../../../images/icons/${img}.png`)} alt="" />

                <h5>{task}</h5>
                <p>{description}</p>
            </div>
        </div>

    );
};

export default MyService;