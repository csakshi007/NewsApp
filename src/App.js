import "./App.css";

import React, { Component } from 'react';
import Navbar from './component/Navbar';
import News from "./component/News";
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";

const App =()=> {
  const pageSize=5;
  const apiKey=process.env.REACT_APP_NEWS_API;
  
    return (
      <div>
        <Router>
        <Navbar/>
        {/* <News apiKey={apiKey} pageSize={pageSize} country="in" category="general"/> */}
        
        {/* <Switch> */}
        <Routes>
          <Route exact path="/general" element={<News key="general" apiKey={apiKey} pageSize={pageSize} country="in" category="general"/>}></Route>
          <Route exact path="/business" element={<News key="business" apiKey={apiKey} pageSize={pageSize} country="in" category="business"/>}></Route>
          <Route exact path="/entertainment" element={<News key="entertainment" apiKey={apiKey} pageSize={pageSize} country="in" category="entertainment"/>}></Route>
          <Route exact path="/Health" element={<News key="Health" apiKey={apiKey} pageSize={pageSize} country="in" category="Health"/>}></Route>
          <Route exact path="/Science" element={<News key="Science" apiKey={apiKey} pageSize={pageSize} country="in" category="Science"/>}></Route>
          <Route exact path="/Sports" element={<News key="Sports" apiKey={apiKey} pageSize={pageSize} country="in" category="Sports"/>}></Route>
          <Route exact path="/technology" element={<News key="technology" apiKey={apiKey} pageSize={pageSize} country="in" category="technology"/>}></Route>
          {/* </Switch> */}
          </Routes>
        </Router>
      </div>
    );

}

export default App;
