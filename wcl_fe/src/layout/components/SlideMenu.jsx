import SlideMenuItem from './SlideMenuItem'
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
function SlideMenu(props) {

  const screenChange = (newScreen) => {
    props.screenChange(newScreen)
  }

  return (

    <div>
      <div className="slideMenuContainer">
        <SlideMenuItem img={Office} text="Office" />
        <SlideMenuItem img={Weight} text="Gym" />
        <SlideMenuItem screenChange={screenChange} newScreen='PROSPECTS' img={Boxer} text="Prospects" />
        <SlideMenuItem img={Team} text="Staff" />
        <SlideMenuItem img={BoxingRing} text="Events" />
        <SlideMenuItem img={Badge} text="Rankings" />
        <SlideMenuItem img={Businessman} text="Promoters" />
        <SlideMenuItem img={Handshake} text="Affiliates" />
        <SlideMenuItem img={Newspaper} text="Newspaper" />
        <SlideMenuItem img={Medal} text="HOF" />
        <SlideMenuItem img={Chat} text="Forum" />
        <SlideMenuItem img={MoneyBag} text="Support" />
        <SlideMenuItem img={Programmer} text="Credits" />
      </div>

    </div>

  )

}

export default SlideMenu;