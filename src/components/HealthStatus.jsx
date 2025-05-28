
const HealthStatus = (props) => {
  return (
    <div className='health-stat' >
        <div className="body-part">
            <img src={props.icon} alt={props.name} />
            <div>{props.name}</div>
        </div>
        <div className="date-det">{props.date}</div>
        <input className="stat-range" type="range" defaultChecked={props.stat} max={100} min={0} step={1} style={{"--colour":props.colour}} contentEditable="false" />
    </div>
  )
}

export default HealthStatus