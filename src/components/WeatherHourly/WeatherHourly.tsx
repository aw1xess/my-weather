import React, { useEffect } from "react";
import WeatherOnHour from "../WeatherOnHour/WeatherOnHour";
//@ts-ignore
import classnames from "classnames";
import { useSelector } from "react-redux";

import { v4 as uuidv4 } from "uuid";

import styles from "./WeatherHourly.module.sass";

function WeatherHourly() {
	const theme = useSelector((state: { theme: string }) => state.theme);
	const weather = useSelector((state: { weather: any }) => state.weather);

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

	function render() {
		let toRender: Array<JSX.Element> = [];
		for (let i = 0; i < 25; i++) {
			toRender.push(
				<WeatherOnHour
					key={uuidv4()}
					time={convertTime(new Date(weather.hourly[i].dt * 1000))}
					temperature={weather.hourly[i].temp}
					weatherDescription={
						weather.hourly[i].weather[0].description
					}
				/>
			);
		}
		return toRender;
	}

	return (
		<div
			className={classnames(
				styles.weatherHolder,
				theme === "dark" ? styles.themeDark : styles.themeLight
			)}
		>
			<div className={styles.weatherContainer}>{render()}</div>
		</div>
	);
}

export default WeatherHourly;
