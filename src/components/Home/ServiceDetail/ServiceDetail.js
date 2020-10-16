import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './ServiceDetail.css';

const ServiceDetail = ({ service }) => {
    const { name, description, image, img } = service
    // console.log(service);
    
    const history = useHistory();
    const handleService =(service)=>{
        console.log(service, img);
       history.push(`/orderRegister/${service}/${img}/${description}`)
    }


    return (
        <Card onClick={() => handleService(name)} style={{ width: '370px', height: '319px', marginBottom: '70px', border: 'none'}} className=" col-sm-6 col-md-3 text-center serviceCard offset-md-1">
            <div style={{ marginBottom: 'auto', marginTop: 'auto'}}>
                <Card.Img style={{ height: '74px', width: '74px', marginLeft: 'auto', marginRight: 'auto' }} variant="top" src={image} />
                <Card.Body>
                    <Card.Title className="mt-2 mb-4">{name}</Card.Title>
                    <Card.Text style={{ fontWeight: 300, fontStyle: 'poppins', fontSize: '15px' }} className="text-secondary">
                        {description}
                    </Card.Text>
                </Card.Body>
            </div>
        </Card>
    );
};

export default ServiceDetail;