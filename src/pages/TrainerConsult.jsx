import React from 'react'
import './TrainerConsult.css'

export default function TrainerConsult() {
  return (
    <div className="trainer-consult-page">
      <div className="trainer-consult-overlay">
        <div className="trainer-consult-content">
          <h1>Trainer Consult</h1>
          <p>
            Every trainer eventually encounters challenges—whether it's getting new clients, keeping current ones engaged,
            or helping someone through a frustrating plateau. Yet asking for help often feels like admitting defeat.
          </p>
          <p>
            This service offers trainers a discreet, professional space to get perspective, tools, and strategy—so you
            can confidently continue serving your clients.
          </p>
          <ul>
            <li>Not sure how to progress a stalled client?</li>
            <li>Need advice on programming, language, or form strategy?</li>
            <li>Looking to improve retention, close more sales, or build engagement?</li>
          </ul>
          <p>Get support for your toughest training scenarios—without ego, without judgment.</p>
        </div>
      </div>
    </div>
  )
}
