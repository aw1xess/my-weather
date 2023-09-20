import React from "react";
import styles from "./WeatherOnHour.module.sass";
//@ts-ignore
import moon from "../../assets/images/icons/moon.png";
//@ts-ignore
import sunny_cloudy from "../../assets/images/icons/sunny_cloudy.png";

interface Time {
	time: string;
}

function WeatherOnHour({ time }: Time) {
	let image = "";
	return (
		<div className={styles.weather}>
			<p>{time}</p>
			<p>27 °C</p>
			<img src={sunny_cloudy} alt="weatherIcon" className={styles.icon} />
		</div>
	);
}

export default WeatherOnHour;
