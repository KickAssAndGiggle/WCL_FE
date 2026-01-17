import Prospect from "../gamePanels/smallPanels/Prospect";

function TitledContentBox(props) {

  return (

    <div className="contentBox">
      <div className="contentBoxHeader">
        {props.title}
      </div>
      <div>
        {props.mode == 'PROSPECT' ?
          <Prospect prospect={props.obj} />
          :
        <></>
        }
      </div>
    </div>

  )

}

export default TitledContentBox;