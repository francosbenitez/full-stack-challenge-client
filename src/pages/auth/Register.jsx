import { Link } from 'react-router-dom';
import React, {useState} from 'react';
import Navbar from "../../components/layout/Navbar"

const Register = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });
    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const {email, password } = user
    const handleRegister = (e) => {
        e.preventDefault();
        const requestInit = {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        }
        fetch("http://localhost:5000/user/createUser", requestInit)
        .then(res => res.text())
        .then(res => {
            window.location.href = '/login';
            console.log(res)
        })
    };
    return (
        <>
            <Navbar />
            <section id="wrapper">
                <div className="mt-20 w-full flex justify-center">
                    <form onSubmit={handleRegister} className="bg-white shadow-md rounded px-8 pt-6 pb-8">
                        <div className="mb-4">
                            <label htmlFor="email" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Email
                            </label>
                            <input value={email} name="email" onChange={handleChange} type="text" id="email" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="example@example.com" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Password
                            </label>
                            <input value={password} name="password" onChange={handleChange} type="text" id="password" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="****" required />
                        </div>
                        <div className="mb-4 flex items-center justify-center">
                            <button type="submit" className="bg-primary border-2 border-primary border-opacity-90 hover:bg-opacity-90 text-background font-bold py-2 px-4 rounded">
                                Register
                            </button>
                        </div>
                        <div>
                            Do you have an account?{" "}
                            <Link to="/login">
                                    Log In
                            </Link>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Register;
