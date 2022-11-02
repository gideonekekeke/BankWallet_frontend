import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import AdminSideBar from "./AdminSideBar";
import AdminHome from "./AdminHome";
import TransactionPage from "./TransactionPage";
import AccountInfo from "./AccountInfo";
const AdminHold = () => {
	return (
		<>
			<div>
				<AdminHeader />
				<AdminSideBar />
			</div>
			<Container>
				<Routes>
					<Route path='/' element={<AdminHome />} />
					<Route path='/create' element={<TransactionPage />} />
					<Route path='/profile' element={<AccountInfo />} />
				</Routes>
			</Container>
		</>
	);
};

export default AdminHold;

const Container = styled.div`
	display: flex;
	justify-content: flex-end;
`;
