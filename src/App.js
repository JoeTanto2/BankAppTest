import logo from './logo.svg';
import './App.css';
import CreateBalance from "./components/CreateBalance";
import {  BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CreateDeposit from "./components/CreateDeposit";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/create' component={CreateBalance} exact/>
            <Route path='/deposit' component={CreateDeposit} exact/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
