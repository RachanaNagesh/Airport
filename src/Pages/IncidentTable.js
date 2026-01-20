import { PRIORITY_MAP } from "./IncidentSummary";

import HighIcon from "../img/alarm-high.svg";
import MediumIcon from "../img/alarm-medium.svg";
import LowIcon from "../img/alarm-low.svg";

import * as Styled from "./IncidentTable.styles.js";

const PRIORITY_ICON = {
	1: HighIcon,
	2: MediumIcon,
	3: LowIcon,
};

export const IncidentTable = ({ incidents }) => {
	return (
		<Styled.Table>
			<thead>
				<Styled.Tr>
					<Styled.Th></Styled.Th>
					<Styled.Th>Date and Time</Styled.Th>
					<Styled.Th>ID</Styled.Th>
					<Styled.Th>Location Name</Styled.Th>
					<Styled.Th>Incident Name</Styled.Th>
				</Styled.Tr>
			</thead>
			<tbody>
				{incidents.map((i) => (
					<Styled.Tr key={i.id}>
						<Styled.Td>
							<img
								src={PRIORITY_ICON[i.priority]}
								alt={PRIORITY_MAP[i.priority]}
								style={{ width: 20, height: 20 }}
							/>
						</Styled.Td>
						<Styled.Td>{new Date(i.datetime).toLocaleString()}</Styled.Td>
						<Styled.Td>{i.id}</Styled.Td>
						<Styled.Td>{i.locationName}</Styled.Td>
						<Styled.Td>{i.name}</Styled.Td>
					</Styled.Tr>
				))}
			</tbody>
		</Styled.Table>
	);
};
