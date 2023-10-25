import React from "react";
//@ts-ignore
import styles from "./WeatherOnDay.module.sass";
//@ts-ignore
import classnames from "classnames";
import { useSelector } from "react-redux";
import WeatherIcon from "../WeatherIcon/WeatherIcon";

interface Day {
	timestamp: number;
	minTemp: number;
	maxTemp: number;
	weatherDescription: string;
}

function WeatherOnDay({
	timestamp,
	minTemp,
	maxTemp,
	weatherDescription,
}: Day) {
	const theme = useSelector((state: { theme: string }) => state.theme);
	const fullDate = new Date(timestamp);
	const day = fullDate.getDay();
	const date = fullDate.getDate();

	const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as const;
	return (
		<div
			className={classnames(
				styles.day,
				theme === "dark" ? styles.themeDark : styles.themeLight
			)}
		>
			<p>
				{days[day]} {date}
			</p>
			<div className={styles.icon}>
				<WeatherIcon weather={weatherDescription} hours={12} />
			</div>
			<p>
				{maxTemp} / {minTemp} °C
			</p>
		</div>
	);
}

export default WeatherOnDay;
