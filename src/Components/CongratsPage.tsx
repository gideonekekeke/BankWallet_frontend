import React from "react";
import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";
import pic from "./assets/cong.png";
import GlobalButton from "./GlobalButton";
import axios from "axios";
const CongratsPage: React.FC = () => {
	const { id } = useParams();
	const url = "http://localhost:5000";

	React.useEffect(() => {
		axios.get(`${url}/api/users/verify/${id}`);
	}, []);

	return (
		<Container>
			<Logo>AjWallet</Logo>
			<Card>
				<CongImage src={pic} />
				<h2>Your request is complete!</h2>
				<p>
					Your email has been confirmed, You can now Log in to access your
					Dashboard.
				</p>
				<NavLink
					style={{
						textDecoration: "none",
					}}
					to='/login'>
					{" "}
					<GlobalButton title='Continue' wd='170px' />
				</NavLink>
			</Card>
		</Container>
	);
};

export default CongratsPage;

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
