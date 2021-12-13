import React from 'react';
import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './service.css';

const Service = ({service}) => {
    const { name, cost, description, img,_id } = service;
    // console.log(service)
    return (
        <div className="service text pb-5">
            <img src={img} alt="" />
            <h2 className="name-text">{name}</h2>
            <h4>Cost of:{cost}$</h4>
            <p className="px-3">{description}</p>
            <Link to={`/booking/${_id}`}><Button variant="info">BOOK NOW</Button></Link>
        </div>
    );
};

export default Service;