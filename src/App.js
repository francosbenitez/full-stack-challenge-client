import './App.css';
import Home from "./views/Home"
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Add from "./views/Add"
import Update from "./views/Update"

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
