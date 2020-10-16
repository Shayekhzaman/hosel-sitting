import React from 'react';
import service1 from '../../../images/icons/service1.png';
import service2 from '../../../images/icons/service2.png';
import service3 from '../../../images/icons/service3.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        name: 'Web & Mobile design',
        description: 'We craft stunning and amazing web Ul,using a well drafted ux to fit your product',
        image: service1,
        img:'service1'
    },
    {
        name: 'Graphics design',
        description: 'Amazing flyers,social media post and brand representation that would make your brand stand out',
        image: service2,
        img:'service2'
    },
    {
        name: 'Web development',
        description: 'With well written code.We build amazing apps for all platforms.Mobile and web apps in generates',
        image: service3,
        img:'service3'
    },
]

const Services = () => {
    const headerStyle = {
        textAlign: 'center', fontWeight: 600, fontSize: '34px', fontStyle: 'poppins', lineHeight: '43px', marginBottom: '60px'
    }
    return (
        <section>
            <h1 style={headerStyle}>Provide awesome <span style={{ color: 'green' }}>services</span> </h1>
            <div className='d-flex justify-content-center'>
                <div className="w-75 row">
                    {
                        serviceData.map(service => <ServiceDetail service={service}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;        