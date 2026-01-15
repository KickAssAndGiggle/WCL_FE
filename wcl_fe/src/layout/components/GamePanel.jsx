import { useEffect, useState } from "react";
function GamePanel(props) {

  const [panelProps, setPanelProps] = useState({})

  useEffect(() => {
    var style = {}
    if (props.ScreenSize == "DESKTOP") {
      style.width = '1140px'
    } else if (props.ScreenSize == "MOBILE") {
      style.width = "600px"
    } else {
      style.width = "900"
    }
    setPanelProps(style)
  }, [props.ScreenSize]);

  return (
    <div className="gamePanel" style={panelProps}>
      <p>jvfdjgs</p>
      <p>fnefgiea</p>
      <p>gjfogosjigj</p>
      <p>gmjdfgsjiogjio[sg</p>
      <p>mbjfgbjfigsji</p>
      <p>gfigjfj</p>
    </div>
  )
}

export default GamePanel