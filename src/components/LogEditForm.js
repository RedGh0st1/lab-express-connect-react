import axios from "axios"
import React, { useEffect, useState } from "react"
import { Button, Form } from "react-bootstrap"
import { Link, useNavigate, useParams } from "react-router-dom"
const API = process.env.REACT_APP_API_URL

export default function LogEditForm() {
  const { index } = useParams()
  const navigate = useNavigate()
  const [log, setNewLogs] = useState({
    CaptainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  })

  function handleCheckbox() {
    setNewLogs({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday })
  }

  function handleTextChange(event) {
    setNewLogs({ ...log, [event.target.id]: event.target.value })
  }

  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((res) => setNewLogs(res.data))
      .catch((err) => console.log(err))
  }, [index])

  function handleSubmit(event) {
    event.preventDefault()
    axios
      .put(`${API}/logs/${index}`, log)
      .then((res) => {
        setNewLogs(res.data)
        navigate(`/logs`)
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className="edit_form">
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
          type="checkbox"
          checked={log.mistakesWereMadeToday}
          onChange={handleCheckbox}
          required
        />
        <label htmlFor="daysSinceLastCrisis">Days since last Crisis:</label>
        <input
          id="daysSinceLastCrisis"
          value={log.daysSinceLastCrisis}
          type="number"
          placeholder="last crisis"
          onChange={handleTextChange}
          required
        />
        <input type="submit" />
      </Form>
      <Link to={`/Logs`}>
        <Button>Back</Button>
      </Link>
    </div>
  )
}
