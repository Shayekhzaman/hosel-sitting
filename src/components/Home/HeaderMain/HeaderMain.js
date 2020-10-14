import React from 'react';
import Frame from '../../../images/logos/Frame.png';

const HeaderMain = () => {
    return (
        <main  className="row d-flex align-items-center mt-5">
            
            <div className="col-md-4 offset-md-1 mt-3">
                <h1 style={{fontStyle:'poppins', fontWeight:'700', lineHeight:'50px', fontSize:'48px', lineHeight:'60px', marginTop:'20px'}}>Let's Grow Your <br/>Brand To The <br/>Next Level </h1>
                <p style={{marginTop:'20px'}}><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Impedit eveniet dicta, ipsam culpa neque sint atque eum unde <br/> voluptatum aperiam repellat suscipit.</small></p>
                <button style={{width:'175px',height:'45px', borderRadius:'5px', backgroundColor:'black', color:'white', marginTop:'20px'}}>Hire Us</button>
            </div>
            <div className="col-md-6">
                <img style={{ width: '624px', height: '422px' }} src={Frame} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;