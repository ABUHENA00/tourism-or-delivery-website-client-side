import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import ContactUs  from '../ContactUs/ContactUs';
import Blogs from '../Blogs/Blogs';
import Footer from '../../Shared/Footer/Footer';


const Home = () => {
    return (
        <div>
         
           <Banner></Banner> 
           <Services></Services>
           <Blogs></Blogs>
           <ContactUs></ContactUs>
           <Footer></Footer>
        </div>
    );
};

export default Home;