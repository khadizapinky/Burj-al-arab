import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router
 
} from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import { Header } from './Components/Header/Header';
import { Home } from './Components/Home/Home';
import { Login } from './Components/Login/Login';
import { Room } from './Components/Room/Room';
import { Book } from './Components/Book/Book';
import { useState, createContext } from 'react';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <h1>email: {loggedInUser.email}</h1>
    <Router>
      <Header></Header>
      <div>
        
      <Switch>
      
          <Route path="/home">
            <Home />
          </Route>

          <Route path="/login">
            <Login />
          </Route>
          <Route path="/book">
            <Book />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
         
        </Switch>
      </div>

    </Router>
    </UserContext.Provider>
  );
}

export default App;
