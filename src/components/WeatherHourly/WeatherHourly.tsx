import React from "react";
import WeatherOnHour from "../WeatherOnHour/WeatherOnHour";
//@ts-ignore
import classnames from "classnames";
import { useSelector } from "react-redux";

import styles from "./WeatherHourly.module.sass";

function WeatherHourly() {
	const theme = useSelector((state: { theme: string }) => state.theme);
	return (
		<div
			className={classnames(
				styles.weatherHolder,
				theme === "dark" ? styles.themeDark : styles.themeLight
			)}
		>
			<WeatherOnHour time="0:00" />
			<WeatherOnHour time="03:00" />
			<WeatherOnHour time="06:00" />
			<WeatherOnHour time="09:00" />
			<WeatherOnHour time="12:00" />
			<WeatherOnHour time="15:00" />
			<WeatherOnHour time="18:00" />
			<WeatherOnHour time="21:00" />
		</div>
	);
}

export default WeatherHourly;
