import React, { useContext, useState } from 'react';
import firebaseConfig from '../../firebase.config';
import firebase from "firebase/app";
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
                   console.log(res);   
            })
            .catch(err => {
                console.log(err);
                console.log(err.message);
            });
    }

    const createAccount = () => {
        alert('Coming Soon!');
    }

    // email and password handle areas
    const [newUser, setNewUser]=useState(false);
    const [user, setUser]= useState({
        isSignedIn:false,
        displayName:'',
        email: '',
        password: '',
        error:'',
        success:false
    })

    const handleBlur = (e) => {
        // console.log(e.target.value , e.target.name);
        let isFieldValid ;
        if(e.target.name === 'email'){
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
            // console.log(isEmailValid);
            // console.log(e.target.value);
        }
        if(e.target.name === 'password'){
            isFieldValid = e.target.value.length > 5 ;
            // console.log(isPasswordValid);
        }
        if(e.target.name==='displayName'){
            isFieldValid = e.target.value;
        }
        if (isFieldValid){
            const newUserInfo= {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }
    const handleSubmit =(e)=>{
        console.log( user.password);
        if(newUser &&  user.displayName && user.password && user.email){
            console.log('submitting');
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((res) => {
               console.log(res);
               const newUserInfo={...user};
                newUserInfo.error='';
                newUserInfo.success=true;
                setUser(newUserInfo);
                alert('Account create successfully!')
            })
            .catch((error) => {
                const newUserInfo= {...user};
                newUserInfo.error = error.message;
                newUserInfo.success=false;
                setUser(newUserInfo);
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage);
                alert(errorMessage);
            });
        }
        if(!newUser && user.email && user.password){
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
            console.log(res);
            const newUserInfo={...user};
             newUserInfo.error='';
             newUserInfo.success=true;
             setUser(newUserInfo);
             setLoggedInUser(user);
             history.replace(from);
        })
        .catch((error) => {
            const newUserInfo= {...user};
                newUserInfo.error = error.message;
                newUserInfo.success=false;
                setUser(newUserInfo);
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage);
                alert(errorMessage);
        });
        }
        e.preventDefault();
    }
    console.log(user);

    return (
        <div className="loginPage">
            <img className="loginLogo" src={logo} alt="" />
            <h3 id="loginNote">Welcome to small Envelop. Please login to continue</h3>
            <div className="loginInfoForm">
                {/* <h1 style={{ textAlign: 'center', marginTop: '120px' }}>Login With</h1> */}
                <form onSubmit={handleSubmit}>
                    { 
                         newUser && <input style={{ marginTop: '30px'}} className='userInput' onBlur={handleBlur} type="text" name="displayName" placeholder='Enter your user name' required />
                    }
                    <br/>
                    <br/>
                    <input className='userInput' onBlur={handleBlur} type="email" name="email" placeholder="Enter your email address" required />
                    <br/>
                    <br/>
                    <input className='userInput' onBlur={handleBlur} type="password" name="password" placeholder="Enter your password" required />
                    <br/>
                    <br/>
                    <input id='userInputBtn' type="submit" value={newUser? 'Submit': 'Login'}/>
                    

                </form>
                <button  onClick={handleSignIn} className="signInBtn" ><i class="fab fa-google" aria-hidden="true" style={{ marginRight: '80px', color: 'green'}} ></i>Continue with Google</button>
                {/* onClick={handleSignIn} */}
                {/* <p className="accountNotice"> <span className='text'>Don't have an account?</span> <a onClick={createAccount} href="/login">Create an account</a></p> */}
                <input onChange={ () =>setNewUser(!newUser) } style={{width:'20px', height:'20px', marginTop:'20px', marginLeft:'195px'}} type="checkbox" name="newUser" id=""/>
                <label htmlFor="newUser"> <span style={{lineHeight:'0px'}}>Create a new account</span> </label>
                { user.success && <p style={{color:'green', textAlign:'center'}}>User {newUser? 'created': 'Logged In'} Successfully</p> }
                <p style={{color:'red', textAlign:'center'}}>{user.error}</p>

            </div>
            <footer style={{ marginTop: '30px' }}>--</footer>
        </div>
    );
};

export default Login;