import React, { useContext } from 'react';
import firebaseConfig from '../../firebase.config';
import * as firebase from "firebase/app";
import "firebase/auth";
import './Login.css';
import logo from '../../images/logos/logo.png';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    const provider = new firebase.auth.GoogleAuthProvider();

    const handleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                const user = res.user;
                setLoggedInUser(user);
                history.replace(from);
                   
                
                
            })
            .catch(err => {
                console.log(err);
                console.log(err.message);
            });
    }

    const createAccount = () => {
        alert('please sign with Google !');
    }

    return (
        <div className="loginPage">
            <img className="loginLogo" src={logo} alt="" />
            <div className="loginInfoForm">
                <h1 style={{ textAlign: 'center', marginTop: '120px' }}>Login With</h1>
                <button className="signInBtn" onClick={handleSignIn}><i class="fab fa-google" aria-hidden="true" style={{ marginRight: '80px', color: 'green'}} ></i>Continue with Google</button>
                <p className="accountNotice"> <span className='text'>Don't have an account?</span> <a onClick={createAccount} href="/login">Create an account</a></p>
            </div>
            <footer style={{ marginTop: '30px' }}>--</footer>
        </div>
    );
};

export default Login;