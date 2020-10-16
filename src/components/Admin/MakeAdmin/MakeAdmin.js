import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import '../Admin.css';

import logo from '../../../images/logos/logo.png';

const MakeAdmin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const { displayName } = loggedInUser;


    const submitMail=()=>{
        const mail= document.getElementById('email').value;
        const email ={mail}
        // console.log(mail);
        // const data={...mail}

        fetch('http://localhost:5000/addAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(email)
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data);
        })

        alert("This email is add ad admin!")

    }
    return (
        <div>
            <div style={{ paddingTop: '40px', display: 'flex' }} className="container">
                <img className="img-fluid mr-5" style={{ width: '150px', height: '47px' }} src={logo} alt="" />
                <h5 className="ml-5 mr-auto" style={{ fontWeight: 500, fontSize: '22px', fontStyle: 'poppins' }}>Make Admin</h5>
                <h4>{displayName}</h4>
            </div>
            <div className="container row offset-md-1">
                <aside style={{ marginTop: '60px' }} className="col-md-2">

                    <ul style={{ listStyleType: 'none', color: 'lightGreen' }}>
                        <li>
                            <i class="fas fa-clipboard-list mr-2"></i>
                            <Link className="link" to="/serviceList">Service List</Link>
                        </li>
                        <br />
                        <li>
                            <i class="fas fa-plus mr-2"></i>
                            <Link className="link" to="/addService">Add Service</Link>
                        </li>
                        <br />
                        <li>
                            <i class="fas fa-user-shield mr-1"></i>
                            <Link className="link" to="/makeAdmin">Make Admin</Link>
                        </li>
                    </ul>

                </aside>
                <main className="col-md-10 main-area">
                    <div className="mailCard">
                        <div className="container">
                        <h4 >Email</h4>
                        <input className="mailInput" type="email" name="" id="email" placeholder="email"/>
                        <button onClick={submitMail} className="mailBtn">Submit</button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default MakeAdmin;