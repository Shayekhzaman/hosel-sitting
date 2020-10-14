import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import LogosArea from '../LogosArea/LogosArea';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className="header-bg">
            <div style={{height:'30px'}}></div>
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            </div>
            <div className="triangle-bg"></div>
            <LogosArea></LogosArea>
        </div>
    );
};

export default Header;