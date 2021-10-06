import React, {useState, useEffect} from 'react';
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import Add from "../components/operations/Add"
import Balance from "../components/operations/Balance"
import List from "../components/operations/List"
import Form from "../components/operations/Form"

const Home = () => {
    const [operation, setOperation] = useState({
        concept: "", 
        amount: "",
        date: "",
        category: "",
        type: "",
        user_id: ""
    })
    const [operations, setOperations] = useState([]);
    const [listUpdated, setListUpdated] = useState(false)
    // const baseUrl = "http://localhost:5000/operation/getOperations"
    // const fetchData = (url) => {
    //   fetch(url)
    //   .then(response => response.json())
    //   .then(data => setOperations(data))
    //   .catch(error => console.log(error))
    // };
    // useEffect(() => {
    //   fetchData(baseUrl);
    // }, [])
    useEffect(() => {
        const getOperations = () => {
            fetch('http://localhost:5000/operation/getOperations')
            .then(res => res.json())
            .then(res => setOperations(res))
        }
        getOperations()
        setListUpdated(false)
    }, [listUpdated])

    const [modal, setModal] = useState(false);
    return (
        <>
            <Navbar />
            <Add />
            <Balance />
            <List operation={operation} setOperation={setOperation} operations={operations} setListUpdated={setListUpdated}/>
            <Form modal={modal} setModal={setModal} operation={operation} setOperation={setOperation} />
            <Footer />
        </>
    );
};

export default Home;