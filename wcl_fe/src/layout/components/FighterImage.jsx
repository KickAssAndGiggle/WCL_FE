import f1 from '../../assets/F1.jpg'
import f2 from '../../assets/F2.jpg'
import f3 from '../../assets/F3.jpg'
import f4 from '../../assets/F4.jpg'
import f5 from '../../assets/F5.jpg'
import f6 from '../../assets/F6.jpg'
import f7 from '../../assets/F7.jpg'
import f8 from '../../assets/F8.jpg'
import f9 from '../../assets/F9.jpg'
import f10 from '../../assets/F10.jpg'

export function FighterImage(props) {



  return (
    <div>
      {props.fighter.Id.toString().endsWith('1') ?
        <img src={f1} width={props.width} height={props.height} />
      : <></>
      }
      {props.fighter.Id.toString().endsWith('2') ?
        <img src={f2} width={props.width} height={props.height} />
        : <></>
      }
      {props.fighter.Id.toString().endsWith('3') ?
        <img src={f3} width={props.width} height={props.height} />
        : <></>
      }
      {props.fighter.Id.toString().endsWith('4') ?
        <img src={f4} width={props.width} height={props.height} />
        : <></>
      }
      {props.fighter.Id.toString().endsWith('5') ?
        <img src={f5} width={props.width} height={props.height} />
        : <></>
      }
      {props.fighter.Id.toString().endsWith('6') ?
        <img src={f6} width={props.width} height={props.height} />
        : <></>
      }
      {props.fighter.Id.toString().endsWith('7') ?
        <img src={f7} width={props.width} height={props.height} />
        : <></>
      }
      {props.fighter.Id.toString().endsWith('8') ?
        <img src={f8} width={props.width} height={props.height} />
        : <></>
      }
      {props.fighter.Id.toString().endsWith('9') ?
        <img src={f9} width={props.width} height={props.height} />
        : <></>
      }
      {props.fighter.Id.toString().endsWith('0') ?
        <img src={f10} width={props.width} height={props.height} />
        : <></>
      }
    </div>


  )

}