import React, { useState, useEffect } from "react";
import styles from "./WeatherNow.module.sass";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import WeatherNowDetails from "./WeatherNowDetails/WeatherNowDetails";
import classnames from "classnames";
import { useSelector } from "react-redux";

type CityRedux = {
	name: string;
	lat: number;
	lon: number;
};

function WeatherNow() {
	let date = new Date();
	let day = date.getDay();
	let month = date.getMonth();
	let time = convertTime(date);

	const theme = useSelector((state: { theme: string }) => state.theme);
	const weather = useSelector((state: { weather: any }) => state.weather);
	const cityName = useSelector(
		(state: { city: CityRedux }) => state.city.name
	);

	const [currentTime, changeTime] = useState(time);
	const [screenSize, setScreenSize] = useState(getCurrentDimension());

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

	function checkTime() {
		let time = convertTime(new Date());
		changeTime(time);
	}

	setInterval(checkTime, 1000);

	function convertTime(date: Date) {
		let hours: string | number = date.getHours();
		let minutes: string | number = date.getMinutes();
		if (hours < 10) {
			hours = "0" + hours;
		}
		if (minutes < 10) {
			minutes = "0" + minutes;
		}
		return `${hours}:${minutes}`;
	}

	function getCurrentDimension() {
		return {
			width: window.innerWidth,
			height: window.innerHeight,
		};
	}

	useEffect(() => {
		const updateDimension = () => {
			setScreenSize(getCurrentDimension());
		};
		window.addEventListener("resize", updateDimension);

		return () => {
			window.removeEventListener("resize", updateDimension);
		};
	}, [screenSize]);

	return (
		<div
			className={classnames(
				styles.weatherNow,
				theme === "dark" ? styles.themeDark : styles.themeLight
			)}
		>
			<div className={classnames(styles.info)}>
				<div className={styles.icon}>
					<WeatherIcon
						weather={weather.current.weather[0].description}
						hours={date.getHours()}
					/>
				</div>

				<p className={styles.temperature}>
					{Math.round(weather.current.temp)}
					°C
				</p>
				<p className={styles.city}>{cityName}</p>
				<p className={styles.time}>{currentTime}</p>
				<p className={styles.date}>
					{days[day]} {date.getDate()}, {months[month]}
				</p>
			</div>
			{screenSize.width > 640 ? <WeatherNowDetails /> : null}
		</div>
	);
}

export default WeatherNow;
