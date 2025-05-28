
const SimpleAppointmentCard = (props) => {
  return (
    <div className="simple-appoint" style={{"--back-colour": props.backcolour, "--text-colour": props.textcolour}}> 
      <div className="appoint-head">
        <span>{props.type}</span>
        <span>{props.icon}</span>
      </div>
      <div>{props.start} {props.end || null}</div>
      <div>{props.doctor || null}</div>
    </div>
  )
}

export default SimpleAppointmentCard