import "../styles/Activity.css"

const ActivityFeed = () => {
  return (
    <div className="Act-feed">
      <div className="Act-title">
        <h3>Activity</h3>
        <span>3 appointemnts on this week</span>
      </div>
      <div className="Act-days">
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
        <span>Sun</span>
      </div>
    </div>
  )
}

export default ActivityFeed