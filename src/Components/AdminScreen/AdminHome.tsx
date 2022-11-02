import React from "react";
import styled from "styled-components";

const AdminHome = () => {
	return (
		<Container>
			<br />
			<Holded>
				<InputHold2>
					<TextHold>
						<input placeholder='Search for Transc.' />
					</TextHold>
				</InputHold2>
			</Holded>
			<Card>
				<Hold>
					<h4>
						Gideon ekeke <span style={{ color: "gray" }}>paid</span>{" "}
						<span>samuel olorunda</span>
					</h4>
					<p>
						payment was successful ....{" "}
						<span style={{ color: "gray" }}>12, may 2022</span>
					</p>
				</Hold>
				<Amo>#14,000</Amo>
			</Card>
			<Card>
				<Hold>
					<h4>
						Gideon ekeke <span style={{ color: "gray" }}>paid</span>{" "}
						<span>samuel olorunda</span>
					</h4>
					<p>
						payment was successful ....{" "}
						<span style={{ color: "gray" }}>12, may 2022</span>
					</p>
				</Hold>
				<Amo>#14,000</Amo>
			</Card>
		</Container>
	);
};

export default AdminHome;

const Holded = styled.div`
	display: flex;
	/* align-items: center; */
`;

const InputHold2 = styled.div`
	display: flex;
	width: 100%;
	/* background-color: red; */
	input {
		height: 35px;
		border-radius: 10px;
		/* background-color: #000000; */
		border: 1px solid grey;
		outline: none;
		color: black;
		width: 200px;
		margin: 5px;
		padding-left: 10px;
		transition: all 350ms;

		@media screen and (max-width: 768px) {
			width: 300px;
		}

		:focus {
			width: 470px;
		}
	}
`;
const TextHold = styled.div`
	display: flex;
	flex-direction: column;
	padding-bottom: 20px;
`;

const Amo = styled.div`
	font-size: 20px;
	font-weight: bold;
	color: #51d803;
`;
const Card = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-right: 20px;
	padding-left: 20px;

	box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;

	h4 {
		margin-bottom: 0;
	}

	p {
		font-size: 12px;
	}
`;
const Hold = styled.div``;

const Container = styled.div`
	min-width: calc(100vw - 200px);
`;
