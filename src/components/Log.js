import React from "react"
import { Link } from "react-router-dom"

export default function Log({ log, index }) {
  return (
    <div className="log">
      <td>
        {Log.mistakesWereMadeToday ? (
          <span>⭐</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
        <Link to={`/logs/${index}`}></Link>
      </td>
    </div>
  )
}
