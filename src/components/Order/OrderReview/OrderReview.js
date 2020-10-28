import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png';
import '../Order.css';

const OrderReview = () => {
    const { register, handleSubmit, errors } = useForm();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const { displayName } = loggedInUser;
    const userName = displayName;

    const onSubmit = (data) => {
        const reviewData = { ...data }
        console.log(reviewData);

        fetch('http://localhost:5000/addReview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reviewData)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

            alert("Thanks for your review !")
    }
    return (
        <div>
            <div style={{ paddingTop: '40px', display: 'flex' }} className="container">
                <img className="img-fluid mr-5" style={{ width: '150px', height: '47px' }} src={logo} alt="" />
                <h5 className="ml-5 mr-auto" style={{ fontWeight: 500, fontSize: '22px', fontStyle: 'poppins' }}>Service Feedback</h5>
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
                        <input className="userReview" type="text" name="userName" defaultValue={displayName} ref={register({ required: true })} id="" placeholder="your name" />
                        {errors.userName && <span Review={{ color: 'red' }}> <br /> This field is required</span>}
                        <br /> <br />
                        <input className="userReview" type="text" name="companyName" id="" placeholder="company's name Designation" ref={register({ required: true })} />
                        {errors.companyName && <span Review={{ color: 'red' }}> <br /> This field is required</span>}
                        <br /> <br />
                        <input className="userReview" type="text" name="description" id="" placeholder="Description" ref={register({ required: true })} />
                        {errors.description && <span style={{ color: 'red' }}> <br /> This field is required</span>}

                        <br /> <br />

                        <input className="submitBtn" type="submit" value="Send" />
                    </form>
                </main>
            </div>
        </div>
    );
};

export default OrderReview;