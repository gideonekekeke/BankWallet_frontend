import React from "react";
import styled from "styled-components";
import GlobalButton from "../GlobalButton";
import pic from "../assets/35.svg";
const AccountInfo: React.FC = () => {
	return (
		<Container>
			<br />
			<br />
			<br />
			<Images src={pic} />

			<span style={{ fontSize: "20px", cursor: "pointer" }}></span>
			<h2>Profile Account Info</h2>
			<p> Check and edit your profile correctly.</p>

			<Card>
				{" "}
				<InputHold>
					<TextHold>
						<input placeholder=' Gideon ekeke' />
					</TextHold>
					<TextHold>
						<input placeholder=' Giddy234' />
					</TextHold>
				</InputHold>
				<InputHold>
					<TextHold>
						<input placeholder=' Gideonekeke57@gmail.com' />
					</TextHold>
					<TextHold>
						<input placeholder=' ***************' />
					</TextHold>
				</InputHold>
			</Card>
			<Card>
				<InputHold2>
					<TextHold>
						<input placeholder='57577556363' />
					</TextHold>
				</InputHold2>
			</Card>

			{/* <MoonLoader size={20} color='#fff' /> */}

			<GlobalButton wd='170px' title='Edit Profile' />
			<p>AJWALLET -Secure. Safe. Reliable</p>
		</Container>
	);
};

export default AccountInfo;

const Card = styled.form`
	/* height: 200px; */
`;

const InputHold = styled.div`
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
		width: 300px;
		margin: 5px;
		padding-left: 10px;

		@media screen and (max-width: 768px) {
			width: 90%;
		}
	}
`;

const Images = styled.img`
	height: 50px;
	width: 100px;
	object-fit: cover;
`;

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
		width: 470px;
		/* margin: 5px; */
		padding-left: 10px;

		@media screen and (max-width: 768px) {
			width: 300px;
		}
	}
`;
const TextHold = styled.div`
	display: flex;
	flex-direction: column;
	padding-bottom: 20px;
`;

const Container = styled.div`
	min-width: calc(100vw - 200px);
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
