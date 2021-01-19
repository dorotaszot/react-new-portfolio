import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

function NavBar() {
  return (
    <div>
      {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
          
            <li class="nav-item active">
              <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/projects">Projetcs</a>
            </li>
          </ul>
        </div>
      </nav> */}


      <nav className='navbar navbar-expand-sm navbar-dark bg-purple '>
        <div className="container">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div>
            <div className="collapse navbar-collapse" id="navbarNav">
              <div className="d-flex justify-content-start">
                <NavLink to='/' exact className="nav-link" activeClassName="active-nav-link">
                  Home
                </NavLink>
                <NavLink to='/projects' className="nav-link" activeClassName="active-nav-link">
                  Projects
                </NavLink>
                <NavLink to='/about' className="nav-link" activeClassName="active-nav-link">
                  About me
                </NavLink>
              </div>
            </div>
          </div>
       

        <div className="social-icons">
          <SocialIcon url="https://www.linkedin.com/in/dorota-szot-7848a0169/" target="blank" fgColor="#fff" style={{ height: 35, width: 35 }} bgColor="transparent" className="mr-3" />
          <SocialIcon url="https://github.com/dorotaszot" target="blank" fgColor="#fff" style={{ height: 35, width: 35 }} bgColor="transparent" />
        </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
