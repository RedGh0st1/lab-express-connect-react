import React, { useEffect, useState } from "react"
import axios from "axios"
import Log from "./Log"
const API = process.env.REACT_APP_API_URL

export default function Logs() {
  const [logs, setNewLogs] = useState([])

  useEffect(() => {
    axios
      .get(`${API}/Logs`)
      .then((res) => setNewLogs(res.data))
      .catch((err) => console.error(err))
  }, [])
  return (
    <div className="Logs">
      <section>
        <table>
          <thead>
            <tr>
              <th>Mistakes</th>
              <th>Captain Name</th>
              <th>See This Log</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, index) => {
              return <Log key={index} log={log} index={index} />
            })}
          </tbody>
        </table>
      </section>
    </div>
  )
}
