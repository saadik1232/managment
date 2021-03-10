import './App.css';
import Dashboard from './dashboard/Dashboard';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Res from './components/Res';
import ResPro from './components/ResPro';
import Topbar from './components/Topbar';

function App() {
  return (
    <>
      <Router>
      {/* <Topbar /> */}
      {/* <Dashboard /> */}
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/Res" component={Res} />
        <Route path="/ResPro/:id" component={ResPro} />
      </Switch>
      </Router>
    </>
  );
}

export default App;
