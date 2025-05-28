import "../styles/Calendar.css"
import { LeftArrow, RightArrow } from '../assets/icons'
import { calendarData } from "../data/Calendar"
import SimpleAppointmentCard from "./SimpleAppointmentCard";
import { CalendarAppoints } from "../data/Appointments";

const times = 3;

const CalendarView = () => {

  const last7Days = calendarData.slice(-7);

  return (
    <div className="calendar-view">
      <div className="calendar-title">
        <h3>October 2021</h3>
        <div>
          <LeftArrow />
          <RightArrow />
        </div>
      </div>
      <div className="calendar">
        <table>
          <thead>
          <tr>
            {last7Days.map((days)=>{
                return <th key={days.day} className="days">
                  {days.day}
                </th>
            })}
          </tr>
          <tr>
            {last7Days.map((days)=>{
              return <th key={days.date} className="dates">
                {days.date}
              </th>
            })}
          </tr>
          </thead>
          <tbody>
          {[0, 1, 2].map((i) => (
            <tr key={i}>
              {last7Days.map((days, index) => (
                <td key={`${index}-${i}`} className="timings">
                  {days.timings[i] || "-"}
                </td>
              ))}
            </tr>
          ))}
          </tbody>
        </table>
      </div>
      <div className="calendar-appoint">
        {
          CalendarAppoints.map((item)=>{
            return <SimpleAppointmentCard {...item}  />
          })
        }
      </div>
    </div>
  )
}

export default CalendarView