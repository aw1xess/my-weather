import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialThemeState = "light";
const initialWeatherState = {};

export const themeSlice = createSlice({
	name: "theme",
	initialState: initialThemeState,
	reducers: {
		setTheme: (state, action) => action.payload,
	},
});

export const weatherSlice = createSlice({
	name: "weather",
	initialState: initialWeatherState,
	reducers: {
		setWeather: (state, action) => action.payload,
	},
});

const themeReducer = themeSlice.reducer;
const weatherReducer = weatherSlice.reducer;

const { setTheme } = themeSlice.actions;
const { setWeather } = weatherSlice.actions;

const store = configureStore({
	reducer: {
		theme: themeReducer,
		weather: weatherReducer,
	},
});

export default store;
export { setTheme, setWeather };
