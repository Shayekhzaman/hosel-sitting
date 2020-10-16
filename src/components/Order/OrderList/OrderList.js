import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png';
import MyService from '../MyService/MyService';

const OrderList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { displayName, email} = loggedInUser;

    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/myService?email='+email)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    console.log(service);

    
    
    return (
        <div>
            <div style={{ paddingTop: '40px', display: 'flex' }} className="container">
                <img className="img-fluid mr-5" style={{ width: '150px', height: '47px' }} src={logo} alt="" />
                <h5 className="ml-5 mr-auto" style={{ fontWeight: 500, fontSize: '22px', fontStyle: 'poppins' }}>User Order</h5>
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
                    <div className="row">
                        {
                            service.map(service => <MyService 
                                service={service}
                                ></MyService>)
                        }
                    </div>
                </main>
            </div>
        </div>
    );
};

export default OrderList;