import React from "react";
import { ImCancelCircle } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from "sweetalert2";
import axios from "axios";
import GlobalButton from "./GlobalButton";
import { User } from "./Global/GlobalState";
import { useRecoilState } from "recoil";

const LoginPage = () => {
	const navigate = useNavigate();

	const [userData, setUserData] = useRecoilState(User);

	console.log(userData);

	const schema = yup.object().shape({
		email: yup.string().email().required("this field is required"),
		password: yup.string().required("this field is required"),
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

	const loginNow = handleSubmit(async (data) => {
		const Url = "https://first-render-app-6lyt.onrender.com";
		const UrlOffline = "http://localhost:5000";
		await axios.post(`${UrlOffline}/api/users/login`, data).then((res) => {
			Swal.fire({
				icon: "success",
				title: res.data.message,
				timer: 1000,
				showConfirmButton: false,
			});

			setUserData(res.data.data);

			navigate("/");

			console.log(res);
		});
	});

	const [toggle, setToggle] = React.useState<boolean>(false);

	const toggleEffect = () => {
		setToggle(!toggle);
	};
	return (
		<Container>
			{" "}
			<Card onSubmit={loginNow}>
				<span style={{ fontSize: "20px", cursor: "pointer" }}>
					<ImCancelCircle />
				</span>
				<h2>Login Your Account</h2>
				<p>
					{" "}
					This is a fake twitter page, Please Fill in all Details correctly
				</p>

				<InputHold2>
					<TextHold>
						<span>Email</span>
						<input {...register("email")} placeholder='Enter your Email' />
					</TextHold>
				</InputHold2>
				<InputHold2>
					<TextHold>
						<span>Password</span>
						<input
							{...register("password")}
							placeholder='Enter your Password'
						/>
						<p>
							Forgot Password?{" "}
							<span
								onClick={() => {
									navigate("/fogotpass");
								}}
								style={{ color: "red", cursor: "pointer" }}>
								{" "}
								click here
							</span>
						</p>
					</TextHold>
				</InputHold2>

				{/* <MoonLoader size={20} color='#fff' /> */}

				<GlobalButton wd='170px' title='Log In' />

				<p>
					Don't Have an account?{" "}
					<span
						onClick={() => {
							navigate("/register");
						}}
						style={{ color: "red", cursor: "pointer" }}>
						{" "}
						Register
					</span>
				</p>
			</Card>
		</Container>
	);
};

export default LoginPage;

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
