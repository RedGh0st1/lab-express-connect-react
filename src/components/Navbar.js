import React from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>
        <Link to="/">Home</Link>
      </h1>

      <Link to="/logs"> Captain's Log</Link>
      <button>
        <Link to="/logs/new">NEW LOG</Link>
      </button>
    </nav>
  )
}
