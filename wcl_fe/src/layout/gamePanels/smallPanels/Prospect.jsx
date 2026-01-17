import Anon from '../../../assets/anon.png'
function Prospect(props) {

	return (
		<div>
			<div className="flex">
				<div>
					<img src={Anon} width="200" height="200" />
				</div>
				<div className="darkText">
					<div className="flex">
						<div className="contentBoxLabel">Weightclass:</div>
						<div className="contentBoxData">{props.prospect.Weightclass}</div>
					</div>
					<div className="flex">
						<div className="contentBoxLabel">Height:</div>
						<div className="contentBoxData">{props.prospect.Height}</div>
					</div>
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
		</div>
	)
}

export default Prospect