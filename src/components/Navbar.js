import React from "react"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>
        <Link to="/">Home</Link>
      </h2>
      <h2>
        <Button variant=" auto-primary">
          <Link to="/logs"> Captain's Log</Link>
        </Button>
      </h2>
      <Button variant="auto-primary">
        <Link to="/logs/new">NEW LOG</Link>
      </Button>
    </nav>
  )
}
