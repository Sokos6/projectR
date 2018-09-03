import { FaCalendarAlt } from 'react-icons/fa'
import { FaCalendarCheck } from 'react-icons/fa'
import { FaCalendar } from 'react-icons/fa'
import { GymDayRow } from './GymDayRow'

export const GymDayList = ({days}) => (
  <table>
    <thead>
      <tr>
        <th>Date</th>
        <th>Gym</th>
        <th>Cardio</th>
        <th>Heavy</th>
      </tr>
    </thead>
    <tbody>
      {days.map((day, i) =>
        <GymDayRow key={i}
          {...day}/>
      )}
    </tbody>

  </table>
)
