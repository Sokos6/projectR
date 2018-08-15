import React from 'react'
import '../stylesheets/ui.scss'

export const GymDayCount = React.createClass({
  render() {
    return (
      <div className="gym-day-count">
        <div className="total-days">
          <span>{this.props.total}</span>
          <span>days</span>
        </div>
        <div className="cardio-days">
          <span>{this.props.cardio}</span>
          <span>days</span>
        </div>
        <div className="heavy-days">
          <span>{this.props.heavy}</span>
          <span>days</span>
        </div>
        <div>
          <span>{this.props.goal}</span>
        </div>
      </div>
    )
  }
})
