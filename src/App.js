
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard';
import Settings from './components/Settings';
import Visuallizations from './components/Visuallizations';

function App() {
  return (
    <div className="container">
      <Router>
        
            <div className="left-column">
            <Sidebar />
            </div>
            
            <div className="center-column">
              <div className="top"></div>
            <Switch>
              <Route exact path="/"><Dashboard/></Route>
              <Route path="/Settings"><Settings/></Route>
              <Route path="/Visuallizations"><Visuallizations/></Route>
            </Switch>  
            </div>
            
      </Router>
    </div>
  );
}

export default App;
