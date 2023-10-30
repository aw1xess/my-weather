import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialThemeState = localStorage.getItem("theme") || "light";
const initialWeatherState = {};
const initialCityState = {
	name: localStorage.getItem("city") || "Kyiv",
	lat: +localStorage.getItem("lat") || 50.45466,
	lon: +localStorage.getItem("lon") || 30.5238,
};

const initialInputFocusState = false;

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
		setCity: (state, action) => {
			state.name = action.payload;
		},
		setLocation: (state, action) => {
			state.lat = action.payload.lat;
			state.lon = action.payload.lon;
		},
	},
});

export const weatherSlice = createSlice({
	name: "weather",
	initialState: initialWeatherState,
	reducers: {
		setWeather: (state, action) => action.payload,
	},
});

export const inputFocusSlice = createSlice({
	name: "inputFocus",
	initialState: initialInputFocusState,
	reducers: {
		setInputFocus: (state, action) => action.payload,
	},
});

const themeReducer = themeSlice.reducer;
const cityReducer = citySlice.reducer;
const weatherReducer = weatherSlice.reducer;
const inputFocusReducer = inputFocusSlice.reducer;

const { setTheme } = themeSlice.actions;
const { setCity, setLocation } = citySlice.actions;
const { setWeather } = weatherSlice.actions;
const { setInputFocus } = inputFocusSlice.actions;

const store = configureStore({
	reducer: {
		theme: themeReducer,
		weather: weatherReducer,
		city: cityReducer,
		inputFocus: inputFocusReducer,
	},
});

export default store;
export { setTheme, setWeather, setCity, setLocation, setInputFocus };
