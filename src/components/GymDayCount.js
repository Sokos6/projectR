import React from 'react'
import '../stylesheets/ui.scss'

export const GymDayCount = React.createClass({
  render() {
    return (
      <div className="gym-day-count">
        <div className="total-days">
          <span>5 days</span>
        </div>
        <div className="cardio-days">
          <span>2 days</span>
        </div>
        <div className="heavy-days">
          <span>1 heavy day</span>
        </div>
      </div>
    )
  }
})
