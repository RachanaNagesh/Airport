import styled from "styled-components";

export const Table = styled.table`
	width: 100%;
	border-collapse: collapse;
`;

export const Th = styled.th`
	text-align: left;
	border-bottom: 1px solid #ddd;
	padding: 8px;
`;

export const Tr = styled.tr`
	&:hover {
		background-color: #0c0b0bff;
	}
`;

export const Td = styled.td`
	padding: 8px;
`;
