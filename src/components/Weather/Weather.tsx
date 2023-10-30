import React, { useState, useEffect } from "react";
import WeatherNow from "../WeatherNow/WeatherNow";
import WeatherHourly from "../WeatherHourly/WeatherHourly";
import WeatherDaily from "../WeatherDaily/WeatherDaily";
import WeatherNowDetails from "../WeatherNow/WeatherNowDetails/WeatherNowDetails";
import WeatherDataService from "../../services/weatherAPI";
import classnames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { setWeather } from "../../redux/store";

import styles from "./Weather.module.sass";
import LoaderCircle from "../LoaderCircle/LoaderCircle";

type CityRedux = {
	name: string;
	lat: number;
	lon: number;
};

function Weather() {
	const theme = useSelector((state: { theme: string }) => state.theme);
	const city = useSelector((state: { city: CityRedux }) => state.city);
	const dispatch = useDispatch();

	const [isLoading, setIsLoading] = useState(true);

	async function getWeather(lat: number, lon: number) {
		const response = await WeatherDataService.getWeatherByCity(lat, lon);
		dispatch(setWeather(response));
		setIsLoading(false);
	}

	useEffect(() => {
		getWeather(city.lat, city.lon);
	}, [city.lat, city.lon]);

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
