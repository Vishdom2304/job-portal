import React from 'react'
import Navbar from './Components/Navbar' 
import JobSection from './Components/JobSection'
import WorkplaceType from './Components/WorkplaceType'
import EmplymentType from './Components/EmplymentType'
import Application from './Components/Application'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import JobItems from './Components/JobItems'
import './App.css';

function App() {
  return (
    <>
      <div className="container-fluid">
      <div className="row">
        <div className="col-9">
          <Router>
            <Navbar />
            <Routes>
              <Route path="/">
                  <Route index element={<Application/>} />
                  <Route path="jobitems" element={<JobItems />} />
              </Route>
            </Routes>
          </Router>
        </div>
        <div className="my-2 col">
          <Router>
            <JobSection/>
          </Router>
        </div>
        <div className="my-2 col">
          <div className="row">
            <div className="col">
              <WorkplaceType />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <EmplymentType/>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
