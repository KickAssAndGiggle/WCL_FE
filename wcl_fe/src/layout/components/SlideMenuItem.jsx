function SlideMenuItem(props) {

  return (
    <div className="slideMenuItem" onClick={() => props.screenChange(props.newScreen)}>
      <img src={props.img} width="24" height="24" style={{ filter: "invert(100%) sepia(1%) saturate(7458%) hue-rotate(284deg) brightness(100%) contrast(104%)" }} />
      <div className="slideMenuLabel">{props.text}</div>
    </div>
  )
}

export default SlideMenuItem