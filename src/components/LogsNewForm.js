import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { Form } from "react-bootstrap"

const API = process.env.REACT_APP_API_URL

export default function LogsNewForm() {
  const navigate = useNavigate()
  const [log, setNewLog] = useState({})

  function handleTextChange(event) {
    setNewLog({ ...log, [event.target.id]: event.target.value })
  }

  function handleSubmit(event) {
    event.preventDefault()
    axios
      .post(`${API}/Logs`, log)
      .then(() => navigate(`/Logs`))
      .catch((err) => console.log(err))
  }

  return (
    <div className="new_form">
      <Form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={log.name}
          type="text"
          placeholder="Name of "
          onChange={handleTextChange}
        />
        <label htmlFor=""></label>
        <input />
        <label htmlFor=""></label>
        <input />
      </Form>
    </div>
  )
}
