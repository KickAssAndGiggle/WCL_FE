function SideMenuItem(props) {

  return (
    <div className="sideBarMenuItem" onClick={() => props.screenChange(props.newScreen) }>
      <div className="flex">
        <div style={{ paddingLeft: "5px" }}>
          <img src={props.img} width="24" height="24" />
        </div>
        <div style={{ paddingTop: "2px", paddingLeft: "10px" }}>
          {props.text}
        </div>
      </div>
    </div>
  )
}

export default SideMenuItem