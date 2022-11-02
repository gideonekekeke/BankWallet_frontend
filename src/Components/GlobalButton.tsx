import React from "react";
import styled from "styled-components";

interface Iprops {
	wd: string;
	title: string;
}
const GlobalButton: React.FC<Iprops> = ({ title, wd }) => {
	return (
		<Button type='submit' wd={wd}>
			{title}
		</Button>
	);
};

export default GlobalButton;

const Button = styled.button<{ wd: string }>`
	height: 35px;
	width: ${(props) => props.wd};
	background-color: black;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	/* padding-bottom: 5px; */
	border-radius: 10px;
	transition: all 350ms;
	cursor: pointer;
	outline: none;

	:hover {
		background-color: white;
		color: black;
		transform: scale(0.9);
	}
`;
