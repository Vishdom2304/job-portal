import React from 'react'
import { Link } from 'react-router-dom'
export default function JobSection() {
  return (
    <div>
      <h5>Job Section</h5>
      <ul className="list-group list-group-flush h6">
        <Link className="list-group-item list-group-item-action" to="/jobitems">Business Systems</Link>
        <li className="list-group-item list-group-item-action text-muted py-3">Design</li>
        <li className="list-group-item list-group-item-action text-muted py-3">Engineering</li>
        <li className="list-group-item list-group-item-action text-muted py-3">Finance</li>
        <li className="list-group-item list-group-item-action text-muted py-3">Human Resource</li>
        <li className="list-group-item list-group-item-action text-muted py-3">Legal</li>
        <li className="list-group-item list-group-item-action text-muted py-3">Marketing</li>
        <li className="list-group-item list-group-item-action text-muted py-3">Operations</li>
        <li className="list-group-item list-group-item-action text-muted py-3">Product</li>
        <li className="list-group-item list-group-item-action text-muted py-3">Sales</li>
        <li className="list-group-item list-group-item-action text-muted py-3">Security</li>
        <li className="list-group-item list-group-item-action text-muted py-3">Support</li>
      </ul>
    </div>
  )
}
