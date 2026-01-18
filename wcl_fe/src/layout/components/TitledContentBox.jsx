import Prospect from "../gamePanels/smallPanels/Prospect";

function TitledContentBox(props) {

  const invokePrimaryCallback = (data) => {
    props.primaryCallback(data)
  }

  return (

    <div className="contentBox">
      <div className="contentBoxHeader">
        {props.title}
      </div>
      <div>
        {props.mode == 'PROSPECT' ?
          <Prospect prospect={props.obj} primaryCallback={invokePrimaryCallback} assigned={props.metaData} />
          :
        <></>
        }
      </div>
    </div>

  )

}

export default TitledContentBox;