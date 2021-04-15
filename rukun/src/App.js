import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Dashboard from './pages/Dashboard'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
    <Switch>
      <Route path="/">
        <Dashboard></Dashboard>
      </Route>
    </Switch>
      </div>
    </Router>
  );
}

export default App;
