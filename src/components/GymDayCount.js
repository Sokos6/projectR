import { Component } from 'react'
import '../stylesheets/ui.scss'

export class GymDayCount extends Component {
  percentToDecimal(decimal) {
    return ((decimal * 100) + "%")
  }
  calcGoalProgress(total, goal) {
    return this.percentToDecimal(total/goal)
  }
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
          <span>{this.calcGoalProgress(this.props.total, this.props.goal)}</span>
        </div>
      </div>
    )
  }
}
