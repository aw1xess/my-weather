import React from "react";
//@ts-ignore
import cloudy from "../../assets/images/icons/cloudy.png";
import styles from "./WeatherOnDay.module.sass";
//@ts-ignore
import classnames from "classnames";
import { useSelector } from "react-redux";

interface Day {
	day: string;
	date: string;
}

function WeatherOnDay({ day, date }: Day) {
	const theme = useSelector((state: { theme: string }) => state.theme);
	return (
		<div
			className={classnames(
				styles.day,
				theme === "dark" ? styles.themeDark : styles.themeLight
			)}
		>
			<p>
				{day} {date}
			</p>
			<img src={cloudy} alt="weather" className={styles.icon} />
			<p>27 °C</p>
		</div>
	);
}

export default WeatherOnDay;
