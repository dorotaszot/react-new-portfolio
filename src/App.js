import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route component={Home} path='/' exact />
          <Route component={About} path='/about' exact />
          <Route component={Projects} path='/projects' exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
