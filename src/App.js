import React from "react";
import { Switch, Route } from "react-router-dom";
// Components
import  Home  from "./pages/Home";
import  Error from "./pages/Error";
import  Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Navbar from "./components/navbar/Navbar";
// Misc imports
import "./App.css";

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/rooms/"  exact component={Rooms}/>
      <Route path="/rooms/:slug"  exact component={SingleRoom}/>

      <Route component={Error}/>
    </Switch>
    </div>
  );
}

export default App;
