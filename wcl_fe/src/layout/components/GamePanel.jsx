import { useEffect, useState } from "react";
import Prospects from "../gamePanels/Prospects";
function GamePanel(props) {

  const [panelProps, setPanelProps] = useState({})

  useEffect(() => {
    var style = {}
    if (props.ScreenSize == "DESKTOP") {
      style.width = '1140px'
    } else if (props.ScreenSize == "MOBILE") {
      style.width = "600px"
    } else {
      style.width = "900px"
    }
    setPanelProps(style)
  }, [props.ScreenSize]);

  return (
    <div className="gamePanel" style={panelProps}>
      {props.Panel == 'OFFICE' ? 
        <></>
        : props.Panel == 'GYM' ?
          <></>
          : props.Panel == 'PROSPECTS' ?
            <Prospects />
            : <></>
      }
    </div>
  )
}

export default GamePanel