import { useState, useEffect } from "react";

import { fakeApis } from "./fake-api";

import { IncidentList } from "./IncidentList";
import { IncidentTable } from "./IncidentTable";

const getLocations = async () => {
	return fakeApis.getLocations().then((data) => data);
};

const getIncidentsByLocationId = async (locId) => {
	return fakeApis.getIncidentsByLocationId(locId).then((data) => data);
};

export const PRIORITY_MAP = {
	1: "High",
	2: "Medium",
	3: "Low",
};

function useWindowWidth() {
	const [width, setWidth] = useState(window.innerWidth);
	useEffect(() => {
		const onResize = () => setWidth(window.innerWidth);
		window.addEventListener("resize", onResize);
		return () => window.removeEventListener("resize", onResize);
	}, []);
	return width;
}

export const IncidentSummary = () => {
	const [incidents, setIncidents] = useState([]);
	const width = useWindowWidth();

	useEffect(() => {
		async function load() {
			const locations = await getLocations();
			console.log(locations);
			const all = [];

			for (const loc of locations) {
				const incidents = await getIncidentsByLocationId(loc.id);

				incidents.forEach((i) => {
					all.push({ ...i, locationName: loc.name });
				});
			}

			//remove duplicates
			const unique = Array.from(new Map(all.map((i) => [i.id, i])).values());

			//sort
			unique.sort((a, b) =>
				a.priority !== b.priority
					? a.priority - b.priority
					: new Date(b.dateTime) - new Date(a.dateTime),
			);

			setIncidents(unique);
		}
		load();
	}, []);

	const isMobile = width < 600;

	return (
		<div>
			<h1>Incidents</h1>
			{isMobile ? (
				<IncidentList incidents={incidents} />
			) : (
				<IncidentTable incidents={incidents} />
			)}
		</div>
	);
};
