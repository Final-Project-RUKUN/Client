import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Dashboard from './pages/Dashboard'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Account from './pages/Account'
import Transactions from './pages/Transactions'
import Suggestions from './pages/Suggestions'
import Villagers from './pages/Villagers'
import Reports from './pages/Reports'

function App() {
  return (
    <Router>
      <div className="App">
    <Switch>
      <Route path="/reports">
        <Reports></Reports>
      </Route>
      <Route path="/transactions">
        <Transactions></Transactions>
      </Route>
      <Route path="/account">
        <Account></Account>
      </Route>
      <Route path="/suggestions">
        <Suggestions></Suggestions>
      </Route>
      <Route path="/villagers">
        <Villagers></Villagers>
      </Route>
      <Route path="/">
        <Dashboard></Dashboard>
      </Route>
    </Switch>
      </div>
    </Router>
  );
}

export default App;
