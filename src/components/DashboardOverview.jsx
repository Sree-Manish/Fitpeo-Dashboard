import AnatomySection from './AnatomySection'
import HealthStatus from './HealthStatus'
import { Healthdata } from '../data/Healthdata'
import { Dropdown } from '../assets/icons'

const DashboardOverview = () => {

  return (
    <div className="Dashboard-view">
      <div className="dash-head">
        <h2>Dashboard</h2>
        <div className="drop">This Week <Dropdown/></div>
      </div>
      <div>
      <AnatomySection />
        <div className="health-stats">
          {
            Healthdata.map((item)=>{
              return <HealthStatus key={item.name} icon={item.icon} name={item.name} date={item.date} stat={item.stat} colour={item.colour} />
            })
          }
          <span>Details &raquo; </span>
        </div>
      </div>
    </div>
  )
}

export default DashboardOverview