import './App.css';
import Home from "./pages/Home"
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Add from "./pages/Add"
import Update from "./pages/Update"

function App() {
  return (
    <>
      <Router>
        <Route path="/" exact={true} component={Home} />
        <Route path="/add" exact={true} component={Add} />
        <Route path="/update/:id" exact={true} component={Update} />
      </Router>
    </>
  );
}

export default App;
