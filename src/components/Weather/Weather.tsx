import React, { useState, useEffect } from "react";
import WeatherNow from "../WeatherNow/WeatherNow";
import WeatherHourly from "../WeatherHourly/WeatherHourly";
import WeatherDaily from "../WeatherDaily/WeatherDaily";
import WeatherDataService from "../../services/weatherAPI";
//@ts-ignore
import classnames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { setWeather } from "../../redux/store";

import styles from "./Weather.module.sass";
import LoaderCircle from "../LoaderCircle/LoaderCircle";

function Weather() {
	const theme = useSelector((state: { theme: string }) => state.theme);
	const weather = useSelector((state: { weather: any }) => state.weather);
	const userInputCity = useSelector((state: { city: string }) => state.city);
	const dispatch = useDispatch();

	const [isLoading, setIsLoading] = useState(true);

	async function getWeather() {
		const response = await WeatherDataService.getWeatherByCity("Berlin");
		dispatch(setWeather(response));
		setIsLoading(false);
	}

	useEffect(() => {
		getWeather();
	}, []);

	return isLoading ? (
		<div className={styles.loader}>
			<LoaderCircle />
		</div>
	) : (
		<div
			className={classnames(
				styles.weather,
				theme === "dark" ? styles.themeDark : styles.themeLight
			)}
		>
			<WeatherNow />
			<WeatherHourly />
			<WeatherDaily />
		</div>
	);
}

export default Weather;
