import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialThemeState = localStorage.getItem("theme") || "light";
const initialWeatherState = {};
const initialCityState = "";

export const themeSlice = createSlice({
	name: "theme",
	initialState: initialThemeState,
	reducers: {
		setTheme: (state, action) => action.payload,
	},
});

export const citySlice = createSlice({
	name: "city",
	initialState: initialCityState,
	reducers: {
		setCity: (state, action) => action.payload,
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
const cityReducer = citySlice.reducer;
const weatherReducer = weatherSlice.reducer;

const { setTheme } = themeSlice.actions;
const { setCity } = citySlice.actions;
const { setWeather } = weatherSlice.actions;

const store = configureStore({
	reducer: {
		theme: themeReducer,
		weather: weatherReducer,
		city: cityReducer,
	},
});

export default store;
export { setTheme, setWeather, setCity };
