import React from 'react';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import ubar from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import airbnb from '../../../images/logos/airbnb.png';

const LogosArea = () => {
    return (
        <div style={{marginBottom:'130px'}} class="mt-5 row offset-md-2 offset-sm-3">
            <div className="col-sm-6 col-lg-2 col-md-3">
                <img style={{ width: '140px', height: '36px' }} src={slack} alt="" />
            </div>

            <div className="col-sm-6 col-lg-2 col-md-3">
                <img style={{ width: '140px', height: '36px' }} src={google} alt="" />
            </div>

            <div className="col-sm-6 col-lg-2 col-md-3">
                <img style={{ width: '100px', height: '36px' }} src={ubar} alt="" />
            </div>

            <div className="col-sm-6 col-lg-2 col-md-3">
                <img style={{ width: '129px', height: '44px' }} src={netflix} alt="" />
            </div>
            <div className="col-sm-6 col-lg-2 col-md-3">
                <img style={{ width: '119px', height: '44px' }} src={airbnb} alt="" />
            </div>
        </div>
    );
};

export default LogosArea;