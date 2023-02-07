// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import NewsItem from './Components/NewsItem';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
      <Router>
      <Navbar />
      {/* <News pageSize = {8}  country= "in" category= "science" /> */}
      {/* <NewsItem/> */}

{/* Here below an individual key is used so that every link can be differentiated with each other. */}
      <Switch>
          <Route exact path="/"> <News pageSize = {8} key="general" country= "in" category= "general" /></Route>
          <Route  path="/business"><News pageSize = {8} key="business" country="in" category="business"/></Route>
          {/* <Route  path="/business"> <News pageSize = {8} key="business" country= "in" category= "business" /></Route> */}

          <Route  path="/entertainment"> <News pageSize = {8} key="entertainment" country= "in" category= "entertainment" /></Route>

          <Route  path="/health"> <News pageSize = {8} key="health" country= "in" category= "health" /></Route>

          <Route  path="/science"> <News pageSize = {8} key="Science" country= "in" category= "Science" /></Route>

          <Route  path="/sports"> <News pageSize = {8} key="sports" country= "in" category= "sports" /></Route>
          
          <Route  path="/technology"> <News pageSize = {8} key="technology" country= "in" category= "technology" /></Route>
        </Switch>

        </Router>
      </>
       )
  }
}