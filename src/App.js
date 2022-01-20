import './App.css';
import Header from './Header'
import Home from './Home/Home'
import Admin from './admin/Admin';
import { BrowserRouter as Router, Route } from "react-router-dom"


function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Route path="/" exact component={Home}></Route>
        <Route path="/admin" component={Admin}></Route>
        {/* <Route path="/users" component={Users}></Route> */}
      </div>
    </Router>
  );
}

export default App;
