import React, {useState} from 'react';
import { useHistory, Link } from 'react-router-dom';
import Navbar from "../components/layout/Navbar"

const Update = ({setListUpdated}) => {
    const history = useHistory()
    const [operation, setOperation] = useState({
        concept: "", 
        amount: "",
        date: "",
        category: "",
        type: "",
        user_id: ""
    })
    const handleChange = e => {
        setOperation({
            ...operation,
            [e.target.name]: e.target.value
        })
    }
    const {concept, amount, date, category, type } = operation
    const handleUpdate = (e) => {
        e.preventDefault();
        const userToken = window.localStorage.getItem("user-token");
        const requestInit = {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                "user-token": userToken
            },
            body: JSON.stringify(operation)
        }
        fetch(`http://localhost:5000/operation${history.location.pathname}`, requestInit)
        .then(res => res.text())
        .then(res => {
            window.location.href = '/home';
            console.log(res)
        })
        setOperation({
            concept: "", 
            amount: "",
            date: "",
            category: "",
            type: "",
            user_id: ""
        })
        setListUpdated(true)
    }
    return (
        <>  
            <Navbar />
            <section id="wrapper" className="pt-10 pb-20">
                <div className="w-full flex justify-center">
                    <form onSubmit={handleUpdate} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label htmlFor="concept" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Concept</label>
                            <input value={concept} name="concept" onChange={handleChange} type="text" id="concept" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Concept" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="amount" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Amount
                            </label>
                            <input value={amount} name="amount" onChange={handleChange} type="number" id="amount" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="1000" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="date" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Date
                            </label>
                            <input value={date} name="date" onChange={handleChange} type="date" id="date" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="category" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Category
                            </label>
                            <div className="relative">
                                <select value={category} name="category" onChange={handleChange} type="text" id="category" className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" required>
                                    <option value="" defaultValue hidden>Choose here</option>
                                    <option>Food</option>
                                    <option>Health</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="type" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Type
                            </label>
                            <div className="relative">
                                <select value={type} name="type" onChange={handleChange} type="type" id="type" className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" required>
                                    <option value="" defaultValue hidden>Choose here</option>
                                    <option>Income</option>
                                    <option>Expense</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <button type="submit" className="bg-primary border-2 border-primary border-opacity-90 hover:bg-opacity-90 text-background font-bold py-2 px-4 rounded">
                                Update
                            </button>
                            <Link to="/home" style={{backgroundImage: 'none'}}>
                                <button className="bg-background border-2 border-primary border-opacity-90 hover:bg-opacity-10 text-primary font-bold py-2 px-4 rounded">
                                    Cancel
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Update;