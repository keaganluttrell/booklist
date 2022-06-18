import { atom } from "recoil";

export const userState = atom({
  key: "currentUserState",
  default: {
    id: 1,
    name: "keagan",
    email: "k@g.n",
  },
});

export const cartState = atom({
  key: "cartState",
  default: [],
});
