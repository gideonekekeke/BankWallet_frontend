import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import GlobalButton from "../GlobalButton";
const AdminHeader = () => {
	return (
		<Header>
			<Logo>AJWALLET</Logo>
			<Holder to='/create'>
				{" "}
				<GlobalButton wd='200px' title='+ Create Transaction ' />
			</Holder>
		</Header>
	);
};

export default AdminHeader;

const Holder = styled(NavLink)`
	margin-right: 30px;
	text-decoration: none;
`;

const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-left: 40px;
	padding-right: 40px;

	height: 60px;
	background-color: #ff9505;
`;
const Logo = styled.div`
	color: white;
	font-weight: bold;
	font-size: 27px;
	margin-left: 20px;
`;

const Container = styled.div`
	box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
`;
