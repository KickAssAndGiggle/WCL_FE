import Anon from '../../../assets/anon.png'
function Prospect(props) {

	return (
		<div>
			<div className="flex">
				<div style={{ paddingLeft: "10px" }}>
					<img src={Anon} width="140" height="140" />
				</div>
				<div style={{ paddingLeft: "10px" }}>
					{/*<div className="flex">*/}
					{/*	<div className="contentBoxLabel">Weightclass:</div>*/}
					{/*	<div className="contentBoxData">{props.prospect.Weightclass}</div>*/}
					{/*</div>*/}
					{/*<div className="flex">*/}
					{/*	<div className="contentBoxLabel">Height:</div>*/}
					{/*	<div className="contentBoxData">{props.prospect.Height}</div>*/}
					{/*</div>*/}
					<div className="flex">
						<div className="contentBoxLabel">Country:</div>
						<div className="contentBoxData">{props.prospect.Country}</div>
					</div>
					<div className="flex">
						<div className="contentBoxLabel">City:</div>
						<div className="contentBoxData">{props.prospect.City}</div>
					</div>
					<div className="flex">
						<div className="contentBoxLabel">Age:</div>
						<div className="contentBoxData">{props.prospect.Age}</div>
					</div>
				</div>
			</div>
			<div style={{ fontSize: "18px", paddingBottom: "4px", paddingLeft: "10px" }}>
				<b>{props.prospect.Weightclass}, {props.prospect.Height}</b>
			</div>
			<div style={{ fontSize: "18px", paddingBottom: "4px", paddingLeft: "10px" }} className="flex">
				<div>
					<b>Background: {props.prospect.Background}</b>
				</div>
				<div className="clickLink" style={{ marginLeft: "auto", marginRight: "10px" }}>
					Details
				</div>
			</div>
		</div>
	)
}

export default Prospect