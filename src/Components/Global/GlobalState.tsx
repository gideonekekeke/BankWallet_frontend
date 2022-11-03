import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { Users, WalletUser } from "./GlobalIntefaces";
const { persistAtom } = recoilPersist();
export const User = atom({
	key: "user",
	default: [] as Array<Users>,
	effects_UNSTABLE: [persistAtom],
});

export const WalletAcc = atom({
	key: "WalletAcc",
	default: [] as Array<WalletUser> | null,
	effects_UNSTABLE: [persistAtom],
});
export const accountUser = atom({
	key: "accountUser",
	default: {} as Users | null,
});
export const Trans = atom({
	key: "Trans",
	default: [] as Array<WalletUser> | null,
});
