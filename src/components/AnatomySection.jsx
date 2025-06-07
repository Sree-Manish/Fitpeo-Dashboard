import { Magnifier } from '../assets/icons'
// import anatomy from "../assets/anatomy.png"
import AnatomyModel from './AnatomyModel'

const AnatomySection = () => {
  return (
    <div className="anatomy">
        {/* <img src={anatomy} alt="" /> */}
        <AnatomyModel />
        <div style={{"--topp": "25%","--leftt":"51%", "--gap-bet":'1.5rem'}}>
          <div className="scan-overlay" ></div>
          <div style={{"--backcolour": "rgb(12, 12, 161)", "--textcolour": "white"}}>❤️ &ensp; Healthy Heart</div>
        </div>
        <div style={{"--topp": "57%","--rightt":"50%", "--gap-bet":'1.25rem'}}>
          <div style={{"--backcolour": "cyan", "--textcolour": "rgb(12, 12, 161)"}}>🦵 &ensp; Healthy Leg</div>
          <div className="scan-overlay" ></div>
        </div>
        <Magnifier />
    </div>
  )
}

export default AnatomySection