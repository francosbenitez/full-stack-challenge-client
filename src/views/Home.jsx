import React from 'react';
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import Balance from "../components/Balance"

const Home = () => {
    return (
        <>
            <Navbar />
            <Balance />
            <Footer />
        </>
    );
};

export default Home;