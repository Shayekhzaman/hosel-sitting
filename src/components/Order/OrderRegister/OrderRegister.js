import React, { useContext } from 'react';
import '../Order.css';
import logo from '../../../images/logos/logo.png';
import { Link, useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import { useForm } from 'react-hook-form';
import './OrderRegister.css';

const OrderRegister = () => {
    const { service, img, description } = useParams();
    const history = useHistory();
    const image='service4';
   
    const { register, handleSubmit, errors } = useForm();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { displayName, email } = loggedInUser;

    const onSubmit = (data) => {
        if(img== null){
            const serviceData={...data}
            console.log(serviceData);

            fetch('http://localhost:5000/addService', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(serviceData)
            })
            .then(res => res.json())
            .then(data=>{
                console.log(data);
            })
        }
        else{
            const serviceData={...data, img, description}
            console.log(serviceData);
            fetch('http://localhost:5000/addService', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(serviceData)
            })
            .then(res => res.json())
            .then(data=>{
                console.log(data);
            })

        }
    

        history.push('/orderList');

    }


    return (
        <div>
            <div style={{ paddingTop: '40px', display: 'flex' }} className="container">
                <img className="img-fluid mr-5" style={{ width: '150px', height: '47px' }} src={logo} alt="" />
                <h5 className="ml-5 mr-auto" style={{ fontWeight: 500, fontSize: '22px', fontStyle: 'poppins' }}>Order Registration</h5>
                <h4>{displayName}</h4>
            </div>
            <div className="container row offset-md-1">
                <aside style={{ marginTop: '60px' }} className="col-md-2">

                    <ul style={{ listStyleType: 'none', color: 'lightGreen' }}>
                        <li>
                            <i class="fas fa-shopping-cart mr-2"></i>
                            <Link className="link" to="/orderRegister">Order</Link>
                        </li>
                        <br />
                        <li>
                            <i class="fas fa-clipboard-list mr-2"></i>
                            <Link className="link" to="/orderList">Service list</Link>
                        </li>
                        <br />
                        <li>
                            <i class="fas fa-comment-alt mr-2"></i>
                            <Link className="link" to="/orderReview">Review</Link>
                        </li>
                    </ul>

                </aside>
                <main className="col-md-10 main-area">
                    <form style={{ marginTop: '90px' }} onSubmit={handleSubmit(onSubmit)}>
                        <input className="userInput" type="text" name="name" defaultValue={displayName} ref={register({ required: true })} id="" placeholder="your name/ company name" />
                        {errors.name && <span style={{ color: 'red' }}> <br /> This field is required</span>}
                        <br /> <br />

                        <input className="userInput" type="email" name="email" defaultValue={email} ref={register({ required: true })} id="" placeholder="your email address" />
                        {errors.email && <span style={{ color: 'red' }}> <br /> This field is required</span>}
                        <br /> <br />

                        <input className="userInput" type="text" name="task" id="" defaultValue={service} placeholder="your service name" ref={register({ required: true })} />
                        {errors.task && <span style={{ color: 'red' }}> <br /> This field is required</span>}
                        <br /> <br />
                        
                        <input type="hidden" name="img" defaultValue={image} ref={register({ required: true })}/>
                        
                        <input className="userInput" type="text" name="description" id="" placeholder="Description" />
                        <br /> <br />

                        <input className="sendBtn" type="submit" value="Send" />
                    </form>
                </main>
            </div>
        </div>
    );
};

export default OrderRegister;