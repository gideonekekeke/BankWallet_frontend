import React from "react";
import styled from "styled-components";
import { ImCancelCircle } from "react-icons/im";
import GlobalButton from "./GlobalButton";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegistrationScreen = () => {
	const UrlOffline = "http://localhost:5000";
	const navigate = useNavigate();
	const schema = yup.object().shape({
		fullName: yup.string().required("this field is required"),
		userName: yup.string().required("this field is required"),
		email: yup.string().email().required("this field is required"),
		password: yup.string().required("this field is required"),
		confirm: yup
			.object()
			.oneOf([yup.ref("password"), null], "password dosent match"),
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

	const registerNow = handleSubmit(async (data) => {
		const Url = "https://first-render-app-6lyt.onrender.com";

		await axios
			.post(`${UrlOffline}/api/users/create`, data)
			.then(async (res) => {
				console.log(res);
				await axios
					.post(`${UrlOffline}/api/wallet/${res.data.data._id}/create`)
					.then((res) => {
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
	});

	const [toggle, setToggle] = React.useState<boolean>(false);

	const toggleEffect = () => {
		setToggle(!toggle);
	};
	return (
		<Container>
			<Logo>AjWallet</Logo>

			<Card onSubmit={registerNow}>
				<span style={{ fontSize: "20px", cursor: "pointer" }}>
					<ImCancelCircle />
				</span>
				<h2>Create Your Account</h2>
				<p>
					{" "}
					This is a fake twitter page, Please Fill in all Details correctly
				</p>

				<InputHold>
					<TextHold>
						<span>FullName</span>
						<input
							{...register("fullName")}
							placeholder='Enter your full name'
						/>
					</TextHold>
					<TextHold>
						<span>UserName</span>
						<input
							{...register("userName")}
							placeholder='Enter your username'
						/>
					</TextHold>
				</InputHold>
				<InputHold>
					<TextHold>
						<span>Email</span>
						<input {...register("email")} placeholder='Enter your Email' />
					</TextHold>
					<TextHold>
						<span>Password</span>
						<input
							{...register("password")}
							placeholder='Enter your Password'
						/>
					</TextHold>
				</InputHold>

				<InputHold2>
					<TextHold>
						<span>Confirm</span>
						<input placeholder='Enter your confirm Password' />
					</TextHold>
					<ErroDiv>
						{errors?.fullName && <p>please enter this field</p>}
					</ErroDiv>
				</InputHold2>
				{/* <MoonLoader size={20} color='#fff' /> */}

				<GlobalButton wd='170px' title='Register Now' />
				<p>
					Already Have an account?{" "}
					<span
						onClick={() => {
							navigate("/login");
						}}
						style={{ color: "red", cursor: "pointer" }}>
						{" "}
						Login
					</span>
				</p>
			</Card>
		</Container>
	);
};

export default RegistrationScreen;

const ErroDiv = styled.p`
	p {
		color: red;
		font-size: 12px;
		background-color: red;
	}
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
		width: 220px;
		margin: 5px;
		padding-left: 10px;

		@media screen and (max-width: 768px) {
			width: 90%;
		}
	}
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
const TextHold = styled.div`
	display: flex;
	flex-direction: column;
	padding-bottom: 20px;
`;

const Card = styled.form`
	/* height: 200px; */
	width: 500px;
	background-color: white;
	margin-top: 20px;
	border-radius: 10px;
	padding: 20px;
	transition: all 350ms;
	color: black;

	@media screen and (max-width: 768px) {
		width: 95%;
	}
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
