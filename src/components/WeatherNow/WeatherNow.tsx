import React, { useState, useEffect } from "react";
import styles from "./WeatherNow.module.sass";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import WeatherDataService from "../../services/weatherAPI";
// @ts-ignore
import sunrise from "../../assets/images/icons/sunrise.png";
// @ts-ignore
import sunset from "../../assets/images/icons/sunset.png";
//@ts-ignore
import classnames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { setWeather } from "../../redux/store";

function WeatherNow() {
	let date = new Date();
	let day = date.getDay();
	let month = date.getMonth();
	let time = date.toLocaleTimeString();
	const theme = useSelector((state: { theme: string }) => state.theme);
	const dispatch = useDispatch();
	let weather = useSelector((state: { weather: any }) => state.weather);

	const days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	] as const;

	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	] as const;

	let [currentTime, changeTime] = useState(time);

	function checkTime() {
		time = new Date().toLocaleTimeString();
		changeTime(time);
	}

	setInterval(checkTime, 1000);

	async function getWeather(city: string) {
		let response = await WeatherDataService.getWeatherByCity(city);
		dispatch(setWeather(response));
		// getCurrentWeather(response.current);
	}

	function checkIfLoaded() {
		return (
			Object.keys(weather).length === 0 && weather.constructor === Object
		);
	}

	// let [temp, changeTemp] = useState(0);

	// function getCurrentWeather(data: any) {
	// 	changeTemp(Math.round(data.temp));
	// }

	useEffect(() => {
		getWeather("Kyiv");
	}, []);

	return (
		<div
			className={classnames(
				styles.weatherNow,
				theme === "dark" ? styles.themeDark : styles.themeLight
			)}
		>
			<div className={styles.info}>
				<WeatherIcon />
				<p className={styles.temperature}>
					{checkIfLoaded()
						? "Loading"
						: Math.round(weather.current.temp)}
					°C
				</p>
				<p className={styles.city}>Kyiv</p>
				<p className={styles.time}>{currentTime.slice(0, -3)}</p>
				<p className={styles.date}>
					{days[day]} {date.getDate()}, {months[month]}
				</p>
			</div>
			<div className={styles.details}>
				<div className={styles.sunInfo}>
					<div className={styles.sunrise}>
						<p>Sunrise</p>
						<img
							src={sunrise}
							alt="Sunrise"
							className={styles.sunriseImg}
						/>
						<p className={styles.sunriseTime}>
							{checkIfLoaded()
								? "Loading"
								: new Date(weather.current.sunrise * 1000)
										.toLocaleTimeString()
										.slice(0, -3)}
						</p>
					</div>
					<div className={styles.sunset}>
						<p>Sunset</p>
						<img
							src={sunset}
							alt="Sunset"
							className={styles.sunsetImg}
						/>
						<p className={styles.sunsetTime}>
							{checkIfLoaded()
								? "Loading"
								: new Date(weather.current.sunset * 1000)
										.toLocaleTimeString()
										.slice(0, -3)}
						</p>
					</div>
				</div>
				<div className={styles.options}>
					<div className={styles.optionsNames}>
						<p className={styles.wind}>Wind speed</p>
						<p className={styles.humidity}>Humidity</p>
						<p className={styles.clouds}>Cloudiness</p>
					</div>
					<div className={styles.optionsValues}>
						<p>
							{checkIfLoaded()
								? "Loading"
								: weather.current.wind_speed}{" "}
							m/s
						</p>
						<p>
							{checkIfLoaded()
								? "Loading"
								: weather.current.humidity}
							%
						</p>
						<p>
							{checkIfLoaded()
								? "Loading"
								: weather.current.clouds}
							%
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WeatherNow;
