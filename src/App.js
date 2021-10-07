import './App.css';
import Home from "./views/Home"
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Add from "./views/Add"

function App() {
  return (
    <>
      <Router>
        {/*<Home />*/}
        <Route path="/" exact={true} component={Home} />
        <Route path="/add" exact={true} component={Add} />
      </Router>
    </>
  );
}

export default App;
