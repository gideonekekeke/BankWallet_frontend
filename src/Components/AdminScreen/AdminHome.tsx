import axios from "axios";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { WalletUser } from "../Global/GlobalIntefaces";
import { Trans, WalletAcc } from "../Global/GlobalState";
import moment from "moment";

const AdminHome = () => {
	const url = "http://localhost:5000";
	const wallData = useRecoilValue(WalletAcc);
	const [dataWall, setDataWall] = useRecoilState(Trans);
	const data = useRecoilValue(Trans);

	// console.log("this is the wallet", wallData);

	const getTransaction = async () => {
		await axios.get(`${url}/api/wallet/${wallData?._id}/wallet`).then((res) => {
			console.log(res);
			setDataWall(res.data?.data?.history);
		});
	};

	React.useEffect(() => {
		getTransaction();
	}, []);

	console.log("tttt", data);

	return (
		<Container>
			<br />
			<Holded>
				<InputHold2>
					<TextHold>
						<input placeholder='Search for Transc.' />
					</TextHold>
				</InputHold2>
			</Holded>
			{data?.map((props) => (
				<Card>
					<Hold>
						<h4>
							{props.recieviedForm} <span style={{ color: "gray" }}>paid</span>{" "}
							<span>{props.sentTo}</span>
						</h4>
						<p>
							payment was successful ....{" "}
							<span style={{ color: "gray" }}>
								{moment(props?.createdAt).format("Do MMMM YYYY")}
							</span>
						</p>
					</Hold>
					{props.paymentType === "credit" ? (
						<Amo cl='#51d803'>#{props.amount?.toLocaleString()}</Amo>
					) : (
						<Amo cl='red'>#{props.amount?.toLocaleString()}</Amo>
					)}
				</Card>
			))}
		</Container>
	);
};

export default AdminHome;

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
		width: 200px;
		margin: 5px;
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

const Amo = styled.div<{ cl: string }>`
	font-size: 20px;
	font-weight: bold;
	color: ${(props) => props.cl};
`;
const Card = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-right: 20px;
	padding-left: 20px;
	width: 95%;

	box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;

	h4 {
		margin-bottom: 0;
	}

	p {
		font-size: 12px;
	}
`;
const Hold = styled.div``;

const Container = styled.div`
	min-width: calc(100vw - 200px);
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
