import '../stylesheets/ui.scss'
import { FaCalendarAlt } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";


const percentToDecimal = (decimal) => {
  return ((decimal * 100) + '%')
}

const calcGoalProgress = (total, goal) => {
  return percentToDecimal(total/goal)
}

export const GymDayCount = ({total, cardio, heavy, goal}) => (
    <div className="gym-day-count">
      <div className="total-days">
        <span>{total}</span>
        <span>days</span>
        <FaCalendarAlt />
      </div>
      <div className="cardio-days">
        <span>{cardio}</span>
        <span>days</span>
      <FaCalendarCheck />
      </div>
      <div className="heavy-days">
        <span>{heavy}</span>
        <span>days</span>
        <FaCalendar />
      </div>
      <div>
        <span>{calcGoalProgress(total, goal)}</span>
      </div>
    </div>
    )
