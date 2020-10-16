import React from 'react';
import unknownUser from '../../../images/unknownUser.png';

const UserFeedback = ({feedback}) => {
    
    const {userName, companyName, description} = feedback
    return (
        
            <section style={{ width: '370px', height: '219px', marginBottom: '70px', border: '2px solid grey' }} className="col-sm-6 col-md-3 text-center  offset-md-1">
            <div style={{ display: 'flex' }} className="text-center">
                <img style={{ width: '74px', height: '74px' }} src={unknownUser} alt="" />
                <div style={{ marginLeft: '10px', marginTop: '15px' }}>
                    <h5>{userName}</h5>
                    <p style={{ textAlign: 'left' }}>{companyName}</p>
                </div>
            </div>
            <div style={{textAlign:'left'}}>{description}</div>

        </section>
        
    );
};

export default UserFeedback;