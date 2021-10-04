import './App.css';
import Background from './components/Background';
import { Route, Switch, Redirect } from 'react-router-dom';
import ToolModels from './components/ToolModels';
import NavBar from './components/NavBar';
import About from './components/AboutUs';

function App() {
  return (
    <div className="App">
      <Background />
      <div style={{ position: 'absolute', top: 0, width: '100%' }}>
        <NavBar />
        <div className="main-content">
          <Switch>
            <Route exact path="/" component={ToolModels} />
            <Route exact path="/about" component={About} />
            {/* <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} /> */}
            {/* For Error page if Path not found <Route component={Error} />  */}
            {/* For Redirect if path not found*/}
            <Redirect to="/" />
        </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
