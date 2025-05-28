import ActivityFeed from "./ActivityFeed"
import CalendarView from "./CalendarView"
import DashboardOverview from "./DashboardOverview"
import UpcomingSchedule from "./UpcomingSchedule"
import "../styles/Dashboard.css";


const DashboardMainContent = () => {
  return (
    <div className='main-content'>
      <div>
        <DashboardOverview />
        <ActivityFeed />
      </div>
      <div>
        <CalendarView />
        <UpcomingSchedule />
      </div>
    </div>
  )
}

export default DashboardMainContent