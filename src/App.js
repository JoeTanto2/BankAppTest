import logo from './logo.svg';
import './App.css';
import CreateBalance from "./components/CreateBalance";
import {  BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/create' component={CreateBalance} exact/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
