import { RootState } from "@/redux/store";
import { TUser } from "@/type";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  users: TUser[];
};
const initialState: InitialState = {
  users: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<TUser>) => {
      const id = nanoid();
      const userData = {
        ...action.payload,
        id,
      };
      state.users.push(userData);
    },
    deleteUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter((user) => {
        return user.id !== action.payload;
      });
    },
  },
});

export const userSelector = (state: RootState) => {
  return state.user.users;
};
export const { addUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
