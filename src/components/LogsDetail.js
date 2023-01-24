import React, { useEffect, useState } from "react"
import axios from "axios"
import { Link, useNavigate, useParams } from "react-router-dom"
import { Button, Card } from "react-bootstrap"
const API = process.env.REACT_APP_API_URL

export default function LogsDetail() {
  const [log, setNewLog] = useState([])
  const { index } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((res) => setNewLog(res.data))
      .catch((err) => navigate("/Not Found"))
  }, [index, navigate])

  function handleDelete() {
    axios
      .delete(`{API}/logs/${index}`)
      .then(() => navigate(`/logs`))
      .catch((err) => console.error(err))
  }

  return (
    <Card className="LogsDetail">
      <Card.Body>
        <div className="show_detail">
          <div className="title">
            <Card.Title>
              <h3>
                {log.title} - By{log.captainName}
              </h3>
            </Card.Title>
            <Card.Body>
              <p className="captain_posts">{log.post}</p>
              <p className="mistakes">
                <span>Mistakes were made today:</span>
                {log.mistakesWereMadetoday ? log.mistakesWereMadetoday : null}
              </p>
              <p className="day_crisis">
                <span> Days since last crisis</span>
                {log.daysSinceLastCrisis ? log.daysSinceLastCrisis : 0}
              </p>
            </Card.Body>
          </div>
        </div>
      </Card.Body>
      <Link to={"/logs"}>
        <Button>Back</Button>
      </Link>
      <Link to={`/logs/${index}/edit`}>
        <Button>Edit</Button>
      </Link>
      <Link to={"/logs"}>
        <Button onClick={handleDelete}>delete</Button>
      </Link>
    </Card>
  )
}
