import "../styles/Sidebar.css"
import { PhoneIcon, GearIcon, ChatIcon, DashBoardIcon, CalendarIcon, HistoryIcon, AppointIcon, StatIcon } from "../assets/icons"

const Sidebar = () => {
  return (
    <nav>
        <div className="sub-nav">General</div>
        <ul>
            <li className="nav-links"><DashBoardIcon/><span>Dashboard</span></li>
            <li className="nav-links"><HistoryIcon /><span>History</span></li>
            <li className="nav-links"><CalendarIcon/><span>Calendar</span></li>
            <li className="nav-links"><AppointIcon /><span>Appointments</span></li>
            <li className="nav-links"><StatIcon/><span>Statistics</span></li>
        </ul>
        <div className="sub-nav">Tools</div>
        <div className="chat"><ChatIcon /><span>Chat</span></div>
        <div className="support"><PhoneIcon /><span>Support</span></div>
        <div className="settings"><GearIcon /><span>Setting</span></div>
    </nav>
  )
}

export default Sidebar