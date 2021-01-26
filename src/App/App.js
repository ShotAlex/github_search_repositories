import NavBar from '../components/NavBar/NavBar'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from '../pages/Home'
import About from "../pages/About";
import Profile from "../pages/Profile";
import Alert from '../components/Alert/Alert'
import {AlertState} from '../Context/Alert/AlertState'



function App() {
  return (
    <AlertState>
      <BrowserRouter>
        <NavBar/>
        <div className="container pt-4">
          <Alert alert={{text: 'Alert text'}} />
          <Switch>
            <Route path='/' exact  component={Home} />
            <Route path='/about' component={About} />
            <Route path='/profile/:name' component={Profile} />
          </Switch>
        </div>
      </BrowserRouter>
    </AlertState>

  );
}

export default App;

