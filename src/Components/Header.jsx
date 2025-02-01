import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar } from "react-bootstrap";
import "../App.css";


const Header = () => {
  return (
    <div className="sidebar">
    <Navbar variant="dark" className="flex-column">
      <Nav className="flex-column">
        <Nav.Item>
        <li><a className="nav-link" href="#home">Home</a></li>
        </Nav.Item>
        <Nav.Item>
        <li><a className="nav-link" href="#about">About</a></li>
        </Nav.Item>
        <Nav.Item>
        <li><a className="nav-link" href="#skill">Skill</a></li>
        </Nav.Item>
        <Nav.Item>
        <li><a className="nav-link" href="#project">Project</a></li>
        </Nav.Item>
        <Nav.Item>
        <li><a className="nav-link" href="#contact">Contact</a></li>

        </Nav.Item>
      </Nav>
    </Navbar>
  </div>
  )
}

export default Header
