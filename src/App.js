

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import LoginForm from './components/LoginForm';
import NavBar from './components/NabBar';
import StudentDetails from './pages/StudentDetails';
import EditDetails from './pages/EditDetails';
import Home from './pages/Home';

function App() {
  return (

    <Router>
      
    <div className="App">
      <NavBar />

      
      <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
            <LoginForm />
            </Route>
            <Route path="/students/:id">
              <StudentDetails />
            </Route>
            <Route path="/:id/edit">
              <EditDetails />
            </Route>
      </Switch>
      
      
      
    </div>
    </Router>
   
  );
}

export default App;
