import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png';
import './Navbar.css';

const Navbar = () => {
  const history= useHistory();
  const [loggedInUser, setLoggedInUser]= useContext(UserContext);

  const handleLogin = () =>{
    history.push('/orderRegister');
  }

    return (
        <nav class="navbar navbar-expand-lg navbar-light ">
  <img class="img-fluid logo" src={logo} alt="logo"/>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link mr-4" href="/home">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link mr-4" href="/home">Our Portfolio</a>
      </li>
      <li class="nav-item">
        <a class="nav-link mr-4" href="/home">Out Team</a>
      </li>
      <li class="nav-item">
        <a class="nav-link mr-4" href="/home">Contact Us</a>
      </li>
      <li class="nav-item ">
       <button onClick={handleLogin} class="login-btn">Login</button>
      </li>
      
    </ul>
  </div>
</nav>
    );
};

export default Navbar;