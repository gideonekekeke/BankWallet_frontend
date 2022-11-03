export interface Users {
	userName: string;
	fullName: string;
	email: string;
	password: string;
	accesstoken: number;
	accountNumber: number;
	verified: boolean;
	verifiedToken: string;
	followers: {}[];
	following: {}[];
	wallet: {}[];
	_id?: string;
}

export interface WalletUser {
	user?: {};
	totalBalance?: number;
	token?: number;
	credit?: number;
	debit?: number;
	amount?: number;
	paymentDescription?: string;
	history: {}[];
	sentTo?: string;
	recieviedForm?: string;

	transactionsReference?: number;
	transactionDescription?: string;
	availableBalance?: number;
	paymentType: string;
	wallet: {};
	createdAt?: string;
}
