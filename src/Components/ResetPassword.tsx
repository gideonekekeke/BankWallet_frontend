import React from "react";
import styled from "styled-components";
import pic from "./assets/forgot.png";
import GlobalButton from "./GlobalButton";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const ResetPassword: React.FC = () => {
	const navigate = useNavigate();

	const schema = yup.object().shape({
		email: yup.string().email().required("this field is required"),
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

	const ForgetNow = handleSubmit(async (data) => {
		const Url = "https://first-render-app-6lyt.onrender.com";
		const UrlOffline = "http://localhost:5000";
		await axios.post(`${UrlOffline}/api/users/fogotpass`, data).then((res) => {
			Swal.fire({
				icon: "success",
				title: "Operation successfull",
				timer: 1000,
				showConfirmButton: false,
			});
			navigate("/check");

			console.log(res);
		});
	});
	return (
		<Container>
			<Logo>AjWallet</Logo>
			<Card onSubmit={ForgetNow}>
				<CongImage src={pic} />
				<h2>Reset Password</h2>

				<p>
					To complete your Password reseting, Please put in your email address.
				</p>

				<InputHold2>
					<TextHold>
						<input {...register("email")} placeholder='Enter your Email' />
					</TextHold>
				</InputHold2>
				<GlobalButton title='Reset' wd='170px' />
			</Card>
		</Container>
	);
};

export default ResetPassword;

const TextHold = styled.div`
	display: flex;
	flex-direction: column;
	padding-bottom: 20px;
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
		margin: 5px;
		padding-left: 10px;

		@media screen and (max-width: 768px) {
			width: 300px;
		}
	}
`;

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
