import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./features/task/taskSlice";
import userReducer from "./features/user/userSlice";
import { baseApi } from "./api/baseApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    todo: taskReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);
