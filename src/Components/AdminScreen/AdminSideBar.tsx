import React from "react";
import styled from "styled-components";
import { AiFillHome } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { AiFillBank } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { User, WalletAcc } from "../Global/GlobalState";
import axios from "axios";

const AdminSideBar = () => {
	const url = "http://localhost:5000";
	const [userData, setUserData] = useRecoilState(User);
	const users = useRecoilValue(User);
	const myWallet = useRecoilValue(WalletAcc);
	const [walletData, setWalletData] = useRecoilState(WalletAcc);

	const getWallet = async () => {
		await axios.get(`${url}/api/wallet/${users?._id}/wallet`).then((res) => {
			setWalletData(res.data.data);
		});
	};

	React.useEffect(() => {
		getWallet();
	}, []);

	return (
		<Container>
			<AccHold>
				<UserImage src='https://agrimachinery.nic.in/Images/User/User.png' />
				<UserHold>
					<Name>{users?.fullName}</Name>
					<UserName>@{users?.userName}</UserName>
				</UserHold>
			</AccHold>

			<AccBal>
				<Nai>#{myWallet?.totalBalance}</Nai>
				<span>Account Balance</span>
			</AccBal>
			<br />
			<br />

			<Navigation to='/'>
				<Icon>
					<AiFillHome />
				</Icon>
				<Nav>Home</Nav>
			</Navigation>
			<Navigation to='/profile'>
				<Icon>
					<FaUserAlt />
				</Icon>
				<Nav>Account info</Nav>
			</Navigation>
			<Navigation to='/create'>
				<Icon>
					<AiFillBank />
				</Icon>
				<Nav>Transaction</Nav>
			</Navigation>
			<Navigation1
				onClick={() => {
					setUserData(null);
				}}>
				<Icon>
					<FiLogIn />
				</Icon>
				<Nav>Log Out</Nav>
			</Navigation1>
		</Container>
	);
};

export default AdminSideBar;

const Navigation1 = styled.div`
	margin-top: 10px;
	margin-left: 12px;
	display: flex;
	text-decoration: none;
	color: black;
	font-size: 17px;
	font-weight: bold;
	cursor: pointer;
	border-bottom: 1px solid silver;
	padding-bottom: 7px;
	align-items: center;
	transition: all 350ms;

	:hover {
		background: #ffd786;
	}
`;
const Navigation = styled(NavLink)`
	margin-top: 10px;
	margin-left: 12px;
	display: flex;
	text-decoration: none;
	color: black;

	&.active {
		/* background-color: #e6e6e6; */
		transform: scale(0.9);
		transition: all 350ms;
	}

	/* background-color: red; */

	font-size: 17px;
	font-weight: bold;
	cursor: pointer;
	border-bottom: 1px solid silver;
	padding-bottom: 7px;
	align-items: center;
	transition: all 350ms;

	:hover {
		background: #ffd786;
	}
`;
const Icon = styled.div`
	margin-right: 30px;
	margin-top: 5px;
`;
const Nav = styled.div``;

const Nai = styled.div`
	font-weight: bold;
`;
const AccBal = styled.div`
	margin-left: 12px;
	margin-top: 20px;
`;

const UserName = styled.div`
	font-size: 14px;
`;
const AccHold = styled.div`
	margin-top: 30px;
	display: flex;
	align-items: center;
	margin-left: 12px;
`;
const UserImage = styled.img`
	height: 50px;
	width: 50px;
	border-radius: 50%;
	background-color: silver;
	margin-right: 10px;
	object-fit: cover;
`;
const UserHold = styled.div``;
const Name = styled.div`
	font-weight: bold;
`;

const Container = styled.div`
	background-color: white;
	color: black;
	display: flex;
	flex-direction: column;
	/* align-items: center; */
	/* border: 1px solid silver; */
	width: 200px;
	min-height: calc(100vh - 60px);
	position: fixed;
	box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
`;
