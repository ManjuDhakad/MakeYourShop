import React from 'react';
import {Header , Footer} from './Layout.jsx';
import './style/Home.css';
import image from 'E:/CompanyAssignment/chapter247/src/Components/images/home.jpg';

const Home = () => {
    return (
        <div className='home-container'>
            <Header />
            <img className='home-img' src={image} />
            <Footer />
        </div>
    );
}

export default Home;
