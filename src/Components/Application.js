import React from 'react'

export default function () {
  return (
    <div className="my-3 px-3">
      <h1 className="text-center"> Career Dashboard</h1>
      <form  className="my-5">
        <div className="row">
          <div className="col">
            <input type="text" className="form-control colcol" placeholder="Title"/>
          </div>
          <div className="col">
            <input type="text" className="form-control colcol" placeholder="Employment Type"/>
          </div>
        </div>
        <div className="row my-3">
          <div className="col">
            <input type="text" className="form-control colcol" placeholder="Location"/>
          </div>
          <div className="col">
            <input type="text" className="form-control colcol" placeholder="Job Section"/>
          </div>
          <div className="col">
            <input type="text" className="form-control colcol" placeholder="Workplace Type"/>
          </div>
          <div className="col">
            <input type="text" className="form-control colcol" placeholder="Paid/ Gratis"/>
          </div>
        </div>

        <div className="row my-5">
          <div className="col">
            <input type="text" className="form-control colcol" placeholder="Short Description (150 Words)  "/>
          </div>
        </div>
      </form>

      <div className="bg-light p-3">
        <h3>Add a job Description</h3>
        <br/>
        <h6>Description *</h6> 
        <textarea className="form-control" id="myBox" rows="5"></textarea>
        <br/>
        <h3>Add Skills</h3>
        <p className="text-muted">Add skill keywords to make your job more visible to the right candidate (select upto 10)</p>
        <button type="button" className="btn btn-outline-success">Add Skill +</button>  
      </div>

      <div className="d-flex justify-content-end my-2">
        <button type="button" className="btn btn-secondary text-dark textold">Submit</button>
      </div>
    </div>
  )
}
