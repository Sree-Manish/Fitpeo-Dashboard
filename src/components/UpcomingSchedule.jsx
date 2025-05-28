import SimpleAppointmentCard from "./SimpleAppointmentCard"
import "../styles/UpcomingSchedule.css"
import { ThursdayAppoints, SaturdayAppoints } from "../data/Appointments"

const UpcomingSchedule = () => {
  return (
    <div className="Upschedule">
        <h3>The Upcoming Schedule</h3>
        <h4>On Thursday</h4>
          <div className="appoint-cont">
            {
              ThursdayAppoints.map((item)=>{
                return <SimpleAppointmentCard {...item}  />
              })
            }
          </div>
        <h4>On Saturday</h4>
          <div className="appoint-cont">
            {
              SaturdayAppoints.map((item)=>{
                return <SimpleAppointmentCard {...item}  />
              })
            }
          </div>
    </div>
  )
}

export default UpcomingSchedule