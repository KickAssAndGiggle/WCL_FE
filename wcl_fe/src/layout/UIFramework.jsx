import { useEffect, useState } from "react";
import HeaderBar from './components/HeaderBar'
import SideBar from "./components/SideBar";
import SlideMenu from "./components/SlideMenu";
import GamePanel from "./components/GamePanel";

function UIFramework() {

  // DESKTOP, TABLET or MOBILE
  const [screenSize, setScreenSize] = useState('DESKTOP')

  const windowResized = (event) => {
    if (window.innerWidth < 800) {
      setScreenSize('MOBILE')
    } else if (window.innerWidth >= 1200) {
      setScreenSize('DESKTOP')
    } else {
      setScreenSize('TABLET')
    }
  }

  useEffect(() => {
    window.onresize = windowResized
    windowResized()
  }, []);

  return (
    <div style={{ maxWidth: "1400px", margin: "auto" }}>
      <HeaderBar ScreenSize={screenSize} />
      {screenSize == 'DESKTOP' ?
        <div className="flex">
          <div>
            <SideBar />
          </div>
          <div>
            <GamePanel />
          </div>
        </div>
      :
        <SlideMenu />
      }
      <h1>{screenSize}</h1>
    </div>
  )

}

export default UIFramework;