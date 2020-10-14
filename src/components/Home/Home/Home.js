import React from 'react';
import Carousels from '../Carousels/Carousels';
import ClientsFeedback from '../ClientsFeedback/ClientsFeedback';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
           <Services></Services>
           <Carousels></Carousels>
           <ClientsFeedback></ClientsFeedback>
           <Footer></Footer>
        </div>
    );
};

export default Home;