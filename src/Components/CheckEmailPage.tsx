import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import pic from "./assets/ma.jpg";
import GlobalButton from "./GlobalButton";
import axios from "axios";
const CheckMail: React.FC = () => {
	return (
		<Container>
			<Logo>AjWallet</Logo>
			<Card>
				<CongImage src={pic} />
				<h2>Your request is complete!</h2>
				<p>An email has been sent to you...go to your mail and verify</p>
			</Card>
		</Container>
	);
};

export default CheckMail;

const CongImage = styled.img`
	height: 200px;
	width: 300px;
	object-fit: cover;
`;

const Logo = styled.div`
	color: white;
	font-weight: bold;
	font-size: 27px;
	margin-left: 20px;
`;

const Container = styled.div`
	background-color: #ff9505;
	color: black;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	color: white;
	@media screen and (max-width: 500px) {
		height: 100%;
	}
`;

const Card = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	/* height: 200px; */
	width: 500px;
	background-color: white;
	margin-top: 20px;
	border-radius: 10px;
	padding: 20px;
	transition: all 350ms;
	color: black;

	p {
		text-align: center;
	}

	@media screen and (max-width: 768px) {
		width: 95%;
	}
`;
