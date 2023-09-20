import React from "react";
import styles from "./WeatherHourly.module.sass";
import WeatherOnHour from "../WeatherOnHour/WeatherOnHour";

function WeatherHourly() {
	return (
		<div className={styles.weatherHolder}>
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
