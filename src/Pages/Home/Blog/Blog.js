import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Blog.css';

const Blog = ({blog}) => {
    const { name, description, img} = blog;
    // console.log(service)
    return (
        <div className="service text pb-5">
            <img src={img} alt="" />
            <h2 className="name-text">{name}</h2>
            
            <p className="px-3">{description}</p>
            <Link to={`/home`}><Button variant="danger">Read More</Button></Link>
        </div>
    );
};

export default Blog;