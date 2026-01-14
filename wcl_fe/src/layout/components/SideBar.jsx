import SideMenuItem from "./SideMenuItem";
import Office from '../../assets/office.png'
import Weight from '../../assets/weight.png'
import Boxer from '../../assets/boxer.png'
import Team from '../../assets/team.png'
import BoxingRing from '../../assets/boxingring.png'
import Badge from '../../assets/badge.png'
import Businessman from '../../assets/businessman.png'
import Handshake from '../../assets/handshake.png'
import Newspaper from '../../assets/newspaper.png'
import Medal from '../../assets/medal.png'
import Chat from '../../assets/chat.png'
import MoneyBag from '../../assets/moneybag.png'
import Programmer from '../../assets/programmer.png'

function SideBar(props) {

  return (

    <div>
      <div className="sideBarTopPanel">
        <div className="infoHeader">
          Information
        </div>
        <div className="flex">
          <div className="sidebarLabel"><b>Name:</b></div>
          <duv className="sidebarValue">Russell</duv>
        </div>
        <div className="flex">
          <div className="sidebarLabel"><b>Gym:</b></div>
          <div className="sidebarValue">Thunderfists</div>
        </div>
        <div className="flex">
          <div className="sidebarLabel"><b>Money:</b></div>
          <div className="sidebarValue">$5,090,100</div>
        </div>
        <div className="flex">
          <div className="sidebarLabel"><b>Record:</b></div>
          <div className="sidebarValue">W187/L87/D3</div>
        </div>
        <div className="flex">
          <div className="sidebarLabel"><b>Fame:</b></div>
          <div className="sidebarValue">Worldwide</div>
        </div>
        <div className="infoHeader">
          Areas
        </div>
        <SideMenuItem img={Office} text="Office" />
        <SideMenuItem img={Weight} text="Gym" />
        <SideMenuItem img={Boxer} text="Prospects" />
        <SideMenuItem img={Team} text="Staff" />
        <SideMenuItem img={BoxingRing} text="Events" />
        <SideMenuItem img={Badge} text="Rankings" />
        <SideMenuItem img={Businessman} text="Promoters" />
        <SideMenuItem img={Handshake} text="Affiliates" />
        <SideMenuItem img={Newspaper} text="Newspaper" />
        <SideMenuItem img={Medal} text="Hall of fame" />
        <SideMenuItem img={Chat} text="Forum" />
        <div className="infoHeader">
          Extras
        </div>
        <SideMenuItem img={MoneyBag} text="Support" />
        <SideMenuItem img={Programmer} text="Staff & credits" />
      </div>
    </div>

  )

}

export default SideBar;