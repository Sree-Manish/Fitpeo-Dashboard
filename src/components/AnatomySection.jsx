import { Magnifier } from '../assets/icons'
import anatomy from "../assets/anatomy.png"

const AnatomySection = () => {
  return (
    <div className="anatomy">
        <img src={anatomy} alt="" />
        <div style={{"--backcolour": "rgb(12, 12, 161)", "--textcolour": "white", "--topp": "19%", "--leftt":"70%"}}>❤️ &ensp; Healthy Heart</div>
        <div style={{"--backcolour": "cyan", "--textcolour": "rgb(12, 12, 161)", "--topp": "63%","--rightt":"65%"}}>🦵 &ensp; Healthy Leg</div>
        <div className="scan-overlay" style={{"--topp": "19%","--leftt":"53%"}}></div>
        <div className="scan-overlay" style={{"--topp": "63%","--leftt":"41%"}}></div>
        <Magnifier />
    </div>
  )
}

export default AnatomySection