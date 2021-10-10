import React, {useContext} from 'react';
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import AddButton from "../components/operations/AddButton"
import List from "../components/operations/List"
import { UserContext } from "../UserContext"
import { login } from "../utils/login"

const Home = () => {
    const { user, setUser } = useContext(UserContext);
    return (
        <>
            <Navbar />
            <AddButton />
            <pre>{JSON.stringify(user, null, 2)}</pre>
            {user ? (
                <button
                onClick={() => {
                    setUser(null);
                }}
                >
                logout
                </button>
            ) : (
                <button
                onClick={async () => {
                    const user = await login();
                    setUser(user);
                }}
                >
                login
                </button>
            )}
            <List />
            <Footer />
        </>
    );
};

export default Home;