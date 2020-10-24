import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Navbar() {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
       <div className="container">
          <NavLink  className="navbar-brand" to="/">MERN</NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item ">
                <NavLink activeClassName="active" className="nav-link" to="/video">video </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link" to="/video/add">create video</NavLink>
              </li>
            </ul>
          </div>
       </div>
    </nav>
  )
}
