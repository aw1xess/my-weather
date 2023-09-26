import React from "react";
import styles from "./WeatherOnHour.module.sass";
//@ts-ignore
import moon from "../../assets/images/icons/moon.png";
//@ts-ignore
import sunny_cloudy from "../../assets/images/icons/sunny_cloudy.png";
//@ts-ignore
import classnames from "classnames";
import { useSelector } from "react-redux";

interface Time {
	time: string;
}

function WeatherOnHour({ time }: Time) {
	let image = "";
	const theme = useSelector((state: { theme: string }) => state.theme);
	return (
		<div
			className={classnames(
				styles.weather,
				theme === "dark" ? styles.themeDark : styles.themeLight
			)}
		>
			<p>{time}</p>
			<p>27 °C</p>
			<img src={sunny_cloudy} alt="weatherIcon" className={styles.icon} />
		</div>
	);
}

export default WeatherOnHour;
