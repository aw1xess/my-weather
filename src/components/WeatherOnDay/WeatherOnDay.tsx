import React from "react";
//@ts-ignore
import cloudy from "../../assets/images/icons/cloudy.png";
import styles from "./WeatherOnDay.module.sass";

interface Day {
	day: string;
	date: string;
}

function WeatherOnDay({ day, date }: Day) {
	return (
		<div className={styles.day}>
			<p>
				{day} {date}
			</p>
			<img src={cloudy} alt="weather" className={styles.icon} />
			<p>27 °C</p>
		</div>
	);
}

export default WeatherOnDay;
