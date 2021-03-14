import React from 'react';
import service1 from '../../../images/icons/service1.png';
import service2 from '../../../images/icons/service2.png';
import service3 from '../../../images/icons/service3.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        name: '5 Star',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, earum.' ,
        image: service1,
        img:'service1'
    },
    {
        name: 'Economy Class',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, earum.',
        image: service2,
        img:'service2'
    },
    {
        name: 'Business Class',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, earum.',
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