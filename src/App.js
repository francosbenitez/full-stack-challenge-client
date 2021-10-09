import './App.css';
import Home from "./pages/Home"
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Add from "./pages/Add"
import Update from "./pages/Update"
import Register from "./pages/auth/Register"
import Login from "./pages/auth/Login"
import Footer from "./components/layout/Footer"

function App() {
  document.title = "Budget App | Franco Sebastián Benítez";
  return (
    <>
      <Router>
        <Route path="/" exact={true} component={Register} />
        <Route path="/login" exact={true} component={Login} />
        <Route path="/home" exact={true} component={Home} />
        <Route path="/add" exact={true} component={Add} />
        <Route path="/update/:id" exact={true} component={Update} />
      </Router>
      <Footer />
    </>
  );
}

export default App;
