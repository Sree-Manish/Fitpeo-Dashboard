import { Magnifier } from '../assets/icons'
import anatomy from "../assets/anatomy.png"

const AnatomySection = () => {
  return (
    <div className="anatomy">
        <img src={anatomy} alt="" />
        <div>Healthy Heart</div>
        <div>Healthy Leg</div>
        <div className="scan-overlay" style={{"--topp": "19%","--leftt":"53%"}}></div>
        <div className="scan-overlay" style={{"--topp": "63%","--leftt":"41%"}}></div>
        <Magnifier />
    </div>
  )
}

export default AnatomySection