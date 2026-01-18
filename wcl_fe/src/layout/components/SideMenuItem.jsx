function SideMenuItem(props) {

  return (
    <div className="sideBarMenuItem" onClick={() => props.screenChange(props.newScreen) }>
      <div className="flex">
        <div style={{ paddingLeft: "5px" }}>
          <img src={props.img} width="24" height="24" style={{ filter: "invert(100%) sepia(1%) saturate(7458%) hue-rotate(284deg) brightness(100%) contrast(104%)" }} />
        </div>
        <div style={{ paddingTop: "2px", paddingLeft: "10px" }}>
          {props.text}
        </div>
      </div>
    </div>
  )
}

export default SideMenuItem