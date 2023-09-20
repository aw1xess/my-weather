import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = "light";

export const themeSlice = createSlice({
	name: "theme",
	initialState: initialState,
	reducers: {
		set: (state, action) => action.payload,
	},
});

const themeReducer = themeSlice.reducer;
const { set } = themeSlice.actions;

const store = configureStore({
	reducer: {
		theme: themeReducer,
	},
});

export default store;
export { set };
