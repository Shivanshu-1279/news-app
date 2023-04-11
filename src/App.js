// import logo from './logo.svg';
import './App.css';
// import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
import React, { Component } from 'react'
// import NewsItem from './Components/NewsItem';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import { Switch } from 'react-router-dom';
// const App=(props)=>{
//   // pageSize=6;   
                                        
// const [progress, setProgress] = useState(0)
// const [pagesize, setPagesize] = useState(6)
//   // state={
//   //   progress:0
//   // }
//   // setProgress=(progress)=>{
//   //   setState({progress:progress})
//   // }

//     return (
//       <div className='shivanshu'>
//         <Router>
//       <div>
//       <Navbar />
//       <backGround/>

// {/* Loading bar  */}
//       <LoadingBar
//       height={3}
//         color='#f11946'
//         progress={progress}
//       />
//       {/* <News pageSize = {pageSize}  country= "in" category= "science" /> */}
//       {/* <NewsItem/> */}
                                              
// {/* Here below an individual key is used so that every link can be differentiated with each other. */}
//       <Switch>
              
//           <Route exact path="/"><News className="container" setProgress={setProgress} key="general" pageSize = {pagesize} country= "in" category= "general"/></Route>
//           <Route exact path="/business"><News setProgress={setProgress} key="business" pageSize = {pagesize} country="in" category="business"/></Route>
//           <Route exact path="/entertainment"><News setProgress={setProgress} key="entertainment" pageSize = {pagesize} country= "in" category="entertainment"/></Route>
//           <Route exact path="/health"><News setProgress={setProgress} key="health" pageSize = {pagesize} country= "in" category="health"/></Route>
//           <Route exact path="/science"><News setProgress={setProgress} key="science" pageSize = {pagesize} country= "in" category="science"/></Route>
//           <Route exact path="/sports"><News setProgress={setProgress} key="sports" pageSize = {pagesize} country= "in" category="sports"/></Route>
//           <Route exact path="/technology"><News setProgress={setProgress} key="technology"  pageSize = {pagesize} country= "in" category="technology"/></Route>
       
//         </Switch>     
//         </div>
//         </Router>
//       </div>
//        )
//   }
      
export class App extends Component {
  pageSize = 5;

  state = {
    progress:0
  }
                                  
  setProgress = (progress)=>{
    this.setState({progress: progress})
  }

  render() {
    return (
      <div>
        <Router>
        <Navbar/> 
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress} 
      />
        <Switch>

             <Route exact path="/"><News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="in" category="general"/></Route> 
          <Route exact path="/business"><News setProgress={this.setProgress} key="business" pageSize={this.pageSize} country="in" category="business"/></Route> 
          <Route exact path="/entertainment"><News setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/></Route> 
          {/* <Route exact path="/general"><News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="in" category="general"/></Route>  */}
          <Route exact path="/health"><News setProgress={this.setProgress} key="health" pageSize={this.pageSize} country="in" category="health"/></Route> 
          <Route exact path="/science"><News setProgress={this.setProgress} key="science" pageSize={this.pageSize} country="in" category="science"/></Route> 
          <Route exact path="/sports"><News setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country="in" category="sports"/></Route> 
          <Route exact path="/technology"><News setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country="in" category="technology"/></Route> 
        </Switch>
        </Router>
      </div>
    )
  }
}
export default App;