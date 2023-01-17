import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { Form } from "react-bootstrap"

const API = process.env.REACT_APP_API_URL

export default function LogsNewForm() {
  const navigate = useNavigate()
  const [log, setNewLog] = useState({
    captainName: "",
    title: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  })

  function handleTextChange(event) {
    setNewLog({ ...log, [event.target.id]: event.target.value })
  }

  function handleCheckbox(event) {
    setNewLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday })
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
          id="captainName"
          value={log.captainName}
          type="text"
          placeholder="Name of captain"
          onChange={handleTextChange}
          required
        />
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          value={log.title}
          type="text"
          placeholder="title"
          onChange={handleTextChange}
          required
        />
        <label htmlFor="posts">Post:</label>
        <input
          id="post"
          value={log.post}
          placeholder="post"
          onChange={handleTextChange}
          type="text"
          required
        />
        <label htmlFor="mistakesWereMadeToday">Mistakes were made Today:</label>
        <input
          id="mistakesWereMadeToday"
          value={log.mistakesWereMadeToday}
          type="checkbox"
          onChange={handleCheckbox}
          required
        />
        <label htmlFor="daysSinceLastCrisis">Days since last Crisis:</label>
        <input
          id="daysSinceLastCrisis"
          type="text"
          placeholder="last crisis"
          onChange={handleTextChange}
          checked={log.daysSinceLastCrisis}
          required
        />
        <input type="submit" />
      </Form>
    </div>
  )
}
