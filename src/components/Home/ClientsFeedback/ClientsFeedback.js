import React, { useEffect, useState } from 'react';
import customer1 from '../../../images/customer-1.png';
import customer2 from '../../../images/customer-2.png';
import customer3 from '../../../images/customer-3.png';
import FeedbackDetails from '../FeedbackDetails/FeedbackDetails';
import UserFeedback from '../Usereedback/UserFeedback';

const clientFeedback=[
    {
        name:'Kate winslet',
        companyName:'uap',
        description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At labore blanditiis modi accusamus sed possimus esse explicabo odio, iusto adipisci.',
        image:customer1
    },
    {
        name:'Akib hossain',
        companyName:'pciu',
        description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At labore blanditiis modi accusamus sed possimus esse explicabo odio, iusto adipisci.',
        image:customer2
    },
    {
        name:'Jayed ali',
        companyName:'asian',
        description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At labore blanditiis modi accusamus sed possimus esse explicabo odio, iusto adipisci.',
        image:customer3
    },
]
const ClientsFeedback = () => {

    const [review, setReview] =useState([]);
    

    useEffect(()=>{
        fetch('https://ancient-plateau-30299.herokuapp.com/userReview')
        .then(res => res.json())
        .then(data => {
            setReview(data)

        })
        
    },[])
    
    return (
        <div className="text-center">
            <h1 style={{fontStyle:'poppins', textSize:'36px', lineHeight:'54px', marginBottom:'70px'}}>Client <span style={{ color: 'green' }}>Feedback</span></h1>
            <div className="row w-75 " >
                {
                    clientFeedback.map(feedback =><FeedbackDetails 
                        feedback={feedback}                   
                        ></FeedbackDetails>)
                }
            </div>
            <div className="row w-75">
                {
                    review.map(feedback => <UserFeedback 
                        feedback={feedback}
                        ></UserFeedback>)
                }
            </div>

        </div>
    );
};

export default ClientsFeedback;