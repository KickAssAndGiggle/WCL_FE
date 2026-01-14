import { useEffect, useState } from "react";
import WCL from '../../assets/wcl.png'

function HeaderBar(props) {

  const [headerProps, setHeaderProps] = useState({})
  const [imageWidth, setImageWidth] = useState(100)
  const [imageHeight, setImageHeight] = useState(50)

  useEffect(() => {
    var style = {}
    if (props.ScreenSize == "DESKTOP") {
      style.height = '110px'
      style.maxWidth = '1400px';
      setImageWidth(240)
      setImageHeight(118)
    } else if (props.ScreenSize == "MOBILE") {
      style.height = "44px"
      setImageWidth(100)
      setImageHeight(48)
    } else {
      style.height = "62px"
      setImageWidth(140)
      setImageHeight(68)
    }
    setHeaderProps(style)
  }, [props.ScreenSize]);

  return (
    <div className="headerBar" style={headerProps}>
      <div className="flex">
        <div>
          <img src={WCL} width={imageWidth} height={imageHeight} />
        </div>
        <div>
          Web Combat League
        </div>
      </div>
      
    </div>
  )

}

export default HeaderBar