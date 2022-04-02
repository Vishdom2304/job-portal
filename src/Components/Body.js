import React from 'react'
import Navbar from './Navbar'
import JobSection from './JobSection'
import WorkplaceType from './WorkplaceType'
import EmplymentType from './EmplymentType'
import Application from './Application'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import JobItems from './JobItems'
export default function Body() {

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-9">
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Application/>} />
              <Route path="/jobitems" element={<JobItems />} />
            </Routes>
          </Router>
        </div>
        <div className="my-2 col">
            <JobSection />
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
  )
}
