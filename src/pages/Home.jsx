import React from 'react';
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import AddButton from "../components/operations/AddButton"
import List from "../components/operations/List"

const Home = () => {
    return (
        <>
            <Navbar />
            <AddButton />
            <List />
            <Footer />
        </>
    );
};

export default Home;