import React, { useContext, useEffect, useState } from 'react';
import AddService from '../Admin/AddService/AddService';
import OrderRegister from '../Order/OrderRegister/OrderRegister';
import { UserContext } from '../../App';
import { useHistory } from 'react-router-dom';

const DashBoard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [isAdmin, setIsAdmin] = useState([]);


    // app.post('/isAdmin', (req, res) =>{
    //     const email=req.body.email;
    //     service.find({email: email})
    //     .toArray( (err, admin)=>{
    //         res.send(admin.length > 0);
    //     })
    // })



    useEffect(() => {
        fetch('https://ancient-plateau-30299.herokuapp.com/admin')
        .then(res => res.json())
        .then(data=>{
            setIsAdmin(data);
        })

    }, [])


const history = useHistory();

    for(let i=0; i < isAdmin.length; i++){
        let email=isAdmin[i].mail;
        if(email === loggedInUser.email){
           history.push('/addService')
        }
       else{
           console.log(false);
       }
    }
   

    return (
        <div>

            <div>
                <OrderRegister></OrderRegister>

            </div>

        </div>
    );
};

export default DashBoard;