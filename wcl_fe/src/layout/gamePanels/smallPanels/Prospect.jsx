import { useState, useEffect } from 'react'
import Anon from '../../../assets/anon.png'
import { assignProspectToGym } from '../../../helpers/apiAccess'
import { FighterImage } from '../../components/FighterImage'
function Prospect(props) {

	const [assignedOnLoad, setAssignedOnLoad] = useState(props.assigned)

	const assignToGym = (id) => {
		sessionStorage.setItem('WCL_LastProspect', id)
		assignProspectToGym(id, assigned)
	}

	const assigned = (data) => {
		var id = sessionStorage.getItem('WCL_LastProspect')
		var number = parseInt(id);
		props.primaryCallback(number)
	}

	useEffect(() => {
		setAssignedOnLoad(props.assigned)
	}, [props.assigned]);

	return (
		<div>
			<div className="flex">
				<div style={{ paddingLeft: "10px" }}>
					{/*<img src={Anon} width="140" height="140" />*/}
					<FighterImage fighter={props.prospect} width="140" height="140" />
				</div>
				<div style={{ paddingLeft: "10px" }}>
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
					{!assignedOnLoad && props.prospect.GymId != null ?
						<div className="smallText smallVerticalPad">Is keen, you are his local gym</div>
						: <></>}
					{!assignedOnLoad && props.prospect.GymId == null ?
						<div className="smallText smallVerticalPad">Is in demand, will need convincing</div>
						: <></>
					}
					{!assignedOnLoad ?
						<button className="button" onClick={() => assignToGym(props.prospect.Id)}>Invite to gym</button>
						:
						<div className="greenText smallVerticalPad">Is happy to have joined you!</div>
					}
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