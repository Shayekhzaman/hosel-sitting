import React from 'react';

const NotFound = () => {
   const style={
        color:'red',
        textAlign:'center',
        marginTop:'200px'  
    }
    return (
        <div  style={style}>
            <h1 >Not Found !</h1>
            <br/>
            <h2>404 error</h2>
        </div>
    );
};

export default NotFound;