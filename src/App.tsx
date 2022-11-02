import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminHold from "./Components/AdminScreen/AdminHold";
import { User } from "./Components/Global/GlobalState";
import HomeComp from "./Components/HomeComp";
import { useRecoilValue } from "recoil";

function App() {
	const [current, setCurrent] = React.useState<boolean>(true);
	const user = useRecoilValue(User);
	return (
		<div>
			{user?.verified ? (
				<Router>
					<AdminHold />
				</Router>
			) : (
				<Router>
					<HomeComp />
				</Router>
			)}
		</div>
	);
}

export default App;
