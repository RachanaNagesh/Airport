import { PRIORITY_MAP } from "./IncidentSummary";

import HighIcon from "../img/alarm-high.svg";
import MediumIcon from "../img/alarm-medium.svg";
import LowIcon from "../img/alarm-low.svg";

const PRIORITY_ICON = {
	1: HighIcon,
	2: MediumIcon,
	3: LowIcon,
};

export const IncidentList = ({ incidents }) => {
	return (
		<ul>
			<hr />
			{incidents.map((i) => (
				<li key={i.id}>
					<div>
						<img
							src={PRIORITY_ICON[i.priority]}
							alt={PRIORITY_MAP[i.priority]}
							style={{ width: 20, height: 20 }}
						/>{" "}
						{new Date(i.datetime).toLocaleString()}
					</div>

					<div>{i.locationName}</div>
					<div>{i.name}</div>
					<hr />
				</li>
			))}
		</ul>
	);
};
