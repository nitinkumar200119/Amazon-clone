// import logo from './logo.svg';
import React, { useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./Header.js"
import Home from "./Home.js"
import Checkout from "./Checkout.js"
import Login from "./Login.js"
import { useStateValue } from "./StateProvider"
import { auth } from "./firebase"
// import {Link} from "react-router-dom"

function App() {
  const [{ user }, dispatch] = useStateValue();
  //useEffect <<<<<<< POWERFULL
  //peice of cod ewhich run based on given condition
  useEffect(() => {

    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //the user is logged in...
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logout...
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      //any clean up operation go in there...
      unsubscribe();
    };


  }, [])
  console.log(user);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/Checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            {/* <Header> */}

            <Header />
            <Home />


          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
