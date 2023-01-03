import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="Captain_body">
      <Router>
        <div className="Head_Nav">
          <Header />
          <Navbar />
        </div>
        <Routes>
          <Route path="/" />
          <Route />
        </Routes>
      </Router>
    </div>
  )
}

export default App
