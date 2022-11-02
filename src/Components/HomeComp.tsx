import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChangePassword from "./ChangePassoword";
import CheckMail from "./CheckEmailPage";
import CongratsPage from "./CongratsPage";
import LandingPage from "./LandingPage";
import LoginPage from "./LoginPage";
import RegistrationScreen from "./RegistrationScreen";
import ResetPassword from "./ResetPassword";

const HomeComp = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<LandingPage />} />
				<Route path='/register' element={<RegistrationScreen />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/:id/congrat' element={<CongratsPage />} />
				<Route path='/fogotpass' element={<ResetPassword />} />
				<Route path='/check' element={<CheckMail />} />
				<Route path='/changepass/:id' element={<ChangePassword />} />
			</Routes>
		</>
	);
};

export default HomeComp;
