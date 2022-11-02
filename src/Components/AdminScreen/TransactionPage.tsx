import axios from "axios";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import pic from "../assets/34.svg";
import { accountUser, User } from "../Global/GlobalState";
import GlobalButton from "../GlobalButton";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const TransactionPage: React.FC = () => {
	const url: string = "http://localhost:5000";

	const [acc, setAcc] = useRecoilState(accountUser);

	const navigate = useNavigate();

	const [userData, setUserData] = useRecoilState(User);
	const me = useRecoilValue(User);

	console.log(userData);

	const schema = yup.object().shape({
		accountNumber: yup.number().required("this field is required"),
	});

	const {
		handleSubmit,
		register,
		formState: { errors },
		reset,
		// setError,
	} = useForm({
		resolver: yupResolver(schema),
	});

	const querySearchAccount = handleSubmit(async (data) => {
		const { accountNumber } = data;

		await axios
			.get(`${url}/api/users/quer?accountNumber=${accountNumber}`)
			.then((res) => {
				Swal.fire({
					icon: "success",
					title: res.data.message,
					timer: 1000,
					showConfirmButton: false,
				});

				setAcc(res.data);

				console.log("this is the data");
			});
	});

	return (
		<Container>
			<h3>Make a quick Transaction with your friend, family or loved ones</h3>
			<Holded onSubmit={querySearchAccount}>
				<InputHold2>
					<TextHold>
						<input
							{...register("accountNumber")}
							placeholder='Enter Account Number'
						/>
					</TextHold>
				</InputHold2>
				<GlobalButton title='Search' wd='170px' />
			</Holded>
			<Images src={pic} />
			<br />

			<span style={{ fontSize: "20px", cursor: "pointer" }}></span>
			<h2>User Account Info</h2>
			{acc?.fullName ? (
				<>
					<p> Ckeck correctly if this account number is link with this user.</p>

					<Card>
						{" "}
						<InputHold>
							<TextHold>
								<input value={acc.fullName} placeholder=' full name' />
							</TextHold>
							<TextHold>
								<input
									value={acc.accountNumber}
									placeholder=' Account number'
								/>
							</TextHold>
						</InputHold>
					</Card>
					<Card>
						<InputHold2>
							<TextHold>
								<input placeholder='Enter Transfer Amount' />
							</TextHold>
						</InputHold2>
					</Card>

					{/* <MoonLoader size={20} color='#fff' /> */}

					<GlobalButton wd='170px' title='Proceed Now' />
				</>
			) : null}
			<p>AJWALLET -Secure. Safe. Reliable</p>
		</Container>
	);
};

export default TransactionPage;

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

const Holded = styled.form`
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
		width: 300px;
		/* margin: 5px; */
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

const Container = styled.div`
	min-width: calc(100vw - 200px);
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
