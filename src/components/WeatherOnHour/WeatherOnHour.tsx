import React from "react";
import styles from "./WeatherOnHour.module.sass";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
//@ts-ignore
import classnames from "classnames";
import { useSelector } from "react-redux";

interface TimeTemperature {
	time: string;
	temperature: number;
	weatherDescription: string;
}

function WeatherOnHour({
	time,
	temperature,
	weatherDescription,
}: TimeTemperature) {
	const theme = useSelector((state: { theme: string }) => state.theme);
	let hours = time.slice(0, 2);
	return (
		<div
			className={classnames(
				styles.weather,
				theme === "dark" ? styles.themeDark : styles.themeLight
			)}
		>
			<p className={styles.time}>{time}</p>
			<p className={styles.temp}>{Math.round(temperature)} °C</p>
			<div className={styles.icon}>
				<WeatherIcon weather={weatherDescription} hours={+hours} />
			</div>
		</div>
	);
}

export default WeatherOnHour;
