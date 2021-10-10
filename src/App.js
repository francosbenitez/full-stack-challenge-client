import './App.css';
import Home from "./pages/Home"
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Add from "./pages/Add"
import Update from "./pages/Update"
import Register from "./pages/auth/Register"
import Login from "./pages/auth/Login"
import Footer from "./components/layout/Footer"
import { UserContext } from "./UserContext"
import React, { useState, useMemo } from "react";

function App() {
  document.title = "Budget App | Franco Sebastián Benítez";
  const [user, setUser] = useState(null);
  const value = useMemo(() => ({user, setUser}), [user, setUser])
  return (
    <>
      <Router>
        <UserContext.Provider value={value}>
          <Route path="/" exact={true} component={Register} />
          <Route path="/login" exact={true} component={Login} />
          <Route path="/home" exact={true} component={Home} />
          <Route path="/add" exact={true} component={Add} />
          <Route path="/update/:id" exact={true} component={Update} />
        </UserContext.Provider>
      </Router>
      <Footer />
    </>
  );
}

export default App;
