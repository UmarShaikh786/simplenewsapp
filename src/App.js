import "./App.css";

import React, { Component } from "react";
import Navbar from "./Component/Navbar";
import News from "./Component/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export class App extends Component {
  pagesize=6;
  apikey=process.env.REACT_APP_NEWS_API;
  state={
    progress:0,
    
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
 

  render() {

    return (
      <div>
        <Router>
          <Navbar  />
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
       
             />
          <Routes>

          <Route exact path="/"
            
            element=
            {
             <News progress={this.setProgress}  apikey={this.apikey} 
                key="general"
                pagesize={this.pagesize}
                category="general"
                country="in"
              />
            }
          />
            <Route exact path="/general"
            
              element=
              {
               <News progress={this.setProgress}  apikey={this.apikey} 
                  key="general"
                  pagesize={this.pagesize}
                  category="general"
                  country="in"
                />
              }
            />
            <Route exact path="/business"
              
              element=
              {
                <News 
                  progress={this.setProgress}  apikey={this.apikey} 
                  key="business"
                  pagesize={this.pagesize}
                  category="business"
                  country="in"
                />
              }
            />
            <Route exact path="/technology"
              
              element=
              {
                <News progress={this.setProgress}  apikey={this.apikey} 
                  key="technology"
                  pagesize={this.pagesize}
                  category="technology"
                  country="in"
                />
              }
            />
            <Route exact path="/sports"
              
              element=
              {
                <News progress={this.setProgress}  apikey={this.apikey} 
                  key="sports"
                  pagesize={this.pagesize}
                  category="sports"
                  country="in"
                />
              }
            />
            <Route exact path="/science"
              
              element=
              {
                <News progress={this.setProgress}  apikey={this.apikey} 
                  key="science"
                  pagesize={this.pagesize}
                  category="science"
                  country="in"
                />
              }
            />
            <Route exact path="/entertainment"
              
              element=
              {
                <News progress={this.setProgress}  apikey={this.apikey} 
                  key="entertainment"
                  pagesize={this.pagesize}
                  category="entertainment"
                  country="in"
                />
              }
            />
            <Route exact path="/health"
              
              element=
              {
                <News progress={this.setProgress}  apikey={this.apikey} 
                  key="health"
                  pagesize={this.pagesize}
                  category="health"
                  country="in"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
