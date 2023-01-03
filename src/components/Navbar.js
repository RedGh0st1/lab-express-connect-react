import React from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="navbar">
      Navbar
      <Link to="/"></Link>
      <Link to="/logs"> Captain's Log</Link>
      <Link to="/logs/new">NEW LOG</Link>
    </nav>
  )
}
