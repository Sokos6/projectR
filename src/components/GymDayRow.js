import { FaCalendarAlt } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";

export const GymDayRow = ({gym, date, cardio, heavy}) => (
  <tr>
    <td>
      {date.getMonth()+1}/{date.getDate()}/{date.getFullYear()}
    </td>
    <td>
      {gym}
    </td>
    <td>
      {(cardio) ? <FaCalendarCheck/> : null}
    </td>
    <td>
      <FaCalendar />
      {(heavy) ? <FaCalendar /> : null}
    </td>
  </tr>
)
