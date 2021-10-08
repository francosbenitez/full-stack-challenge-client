import React, {useState, useEffect} from 'react';
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import Add from "../components/operations/Add"
import Balance from "../components/operations/Balance"
import List from "../components/operations/List"

const Home = () => {
    return (
        <>
            <Navbar />
            <Add />
            <Balance />
            <List />
            <Footer />
        </>
    );
};

export default Home;