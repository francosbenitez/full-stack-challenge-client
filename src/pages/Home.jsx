import React from 'react';
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import AddButton from "../components/operations/AddButton"
import Balance from "../components/operations/Balance"
import List from "../components/operations/List"

const Home = () => {
    return (
        <>
            <Navbar />
            <AddButton />
            <Balance />
            <List />
            <Footer />
        </>
    );
};

export default Home;