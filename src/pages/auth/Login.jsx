import { Link } from 'react-router-dom';
import React, {useState} from 'react';

const Login = () => {
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
    const handleLogin = () => {
        const requestInit = {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        }
        fetch("http://localhost:5000/user/login", requestInit)
        .then(res => res.text())
        .then(res => console.log(res))
    };
    return (
        <>
            <div className="mt-10 w-full flex justify-center">
                <form onSubmit={handleLogin} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label htmlFor="email" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Email
                        </label>
                        <input value={email} name="email" onChange={handleChange} type="text" id="email" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="example@example.com" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Password
                        </label>
                        <input value={password} name="password" onChange={handleChange} type="text" id="password" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="****" />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-background border-2 border-primary border-opacity-90 hover:bg-opacity-10 text-primary font-bold py-2 px-4 rounded">
                            Log In
                        </button>
                        <Link to="/" style={{backgroundImage: 'none'}}>
                            <button type="submit" className="bg-primary border-2 border-primary border-opacity-90 hover:bg-opacity-90 text-background font-bold py-2 px-4 rounded">
                                Register
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;
