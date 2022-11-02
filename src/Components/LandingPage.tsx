import React from "react";
import styled from "styled-components";
import GlobalButton from "./GlobalButton";
import pic from "../Components/assets/bg1.png";
import { NavLink, useNavigate } from "react-router-dom";

const LandingPage: React.FC = () => {
	return (
		<Container>
			<Header>
				<Logo>AJWALLET</Logo>
				<Holder to='/register'>
					{" "}
					<GlobalButton wd='100px' title='Get started' />
				</Holder>
			</Header>

			<CompHolder>
				<Info1>AjWallet is fast, Secure and Trusted.</Info1>

				<DivHold>
					{" "}
					<FirstComp>
						<h1>
							Maximise your money
							<br />
							with Valuts
						</h1>
						<p>
							Put money aside effortlessly for the things you want with the
							vaults.
						</p>
						<div>-------------------------------</div>
						<P>
							We are a commercial bank that encourages and delivers sustainable
							economic growth that is profitable, environmentally responsible
							and socially relevant
						</P>
						<Holded to='/register'>
							{" "}
							<GlobalButton wd='150px' title='Get started' />
						</Holded>
					</FirstComp>
					<SecondComp>
						<Pix src={pic} />
					</SecondComp>
				</DivHold>
			</CompHolder>
		</Container>
	);
};

export default LandingPage;

const DivHold = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const Info1 = styled.pre`
	color: white;
	width: 40ch;
	animation: typing 10s steps(45, end), blink-caret 0.85s step-end infinite;
	animation-iteration-count: infinite;
	white-space: nowrap;
	overflow: hidden;
	display: flex;
	border-right: 3px solid;
	font-size: 22px;
	@keyframes typing {
		from {
			width: 0;
		}
	}

	@media screen and (max-width: 768px) {
		width: 70%;
		font-size: 12px;
	}
`;

const Holded = styled(NavLink)`
	animation-name: bounce;
	animation-duration: 1s;
	animation-direction: alternate;
	text-decoration: none;
	/* animation-timing-function: cubic-bezier(0.95, 0.05, 0.795, 0.035); */
	animation-iteration-count: infinite;

	@keyframes bounce {
		from {
			transform: translateY(0) scale(1.1);
		}
		to {
			transform: translateY(-1) scale(1, 1);
		}
	}
`;
const P = styled.p`
	width: 500px;
	@media screen and (max-width: 768px) {
		width: 95%;
	}
`;

const Pix = styled.img`
	object-fit: cover;
	height: 100%;
	width: 100%;
`;
const FirstComp = styled.div`
	color: white;
	@media screen and (max-width: 768px) {
		width: 95%;
	}
`;
const CompHolder = styled.div`
	margin-top: 50px;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;

	@media screen and (max-width: 768px) {
	}
`;
const SecondComp = styled.div`
	height: 540px;
	/* width: 500px; */
	position: sticky;

	@media screen and (max-width: 768px) {
		width: 100%;
		height: 300px;
	}

	/* background-color: silver; */
`;

const Holder = styled(NavLink)`
	margin-right: 30px;
	text-decoration: none;
`;

const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px;
	margin-top: 20px;
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
	overflow: hidden;

	@media screen and (max-width: 768px) {
		height: 100%;
	}
`;
