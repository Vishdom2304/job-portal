import React from 'react'

export default function WorkplaceType() {
  return (
    <div>
      <h5>Workplace Type</h5>
      <ul class="list-group flush">
        <li class="list-group-item list-group-item-action">
          <h6>On-site</h6>
          <p className="fsz">Employees come to office to work</p>
        </li>
        <li class="list-group-item list-group-item-action">
          <h6>Remote</h6>
          <p className="fsz">Employees work from home</p>
        </li>
        <li class="list-group-item list-group-item-action">
          <h6>Hybrid</h6>
          <p className="fsz">Mix of on-site and remote</p>
        </li>
      </ul>
    </div>
  )
}
