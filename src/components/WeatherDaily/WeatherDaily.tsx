import React from "react";
import WeatherOnDay from "../WeatherOnDay/WeatherOnDay";
import styles from "./WeatherDaily.module.sass";

function WeatherDaily() {
	return (
		<div className={styles.weatherDaily}>
			<a href="" className={styles.arrowRight}></a>
			<a href="" className={styles.arrowLeft}></a>
			<WeatherOnDay day="Mon" date="01" />
			<WeatherOnDay day="Tue" date="02" />
			<WeatherOnDay day="Wed" date="03" />
			<WeatherOnDay day="Thu" date="04" />
			<WeatherOnDay day="Fri" date="05" />
			<WeatherOnDay day="Sat" date="06" />
			<WeatherOnDay day="Sun" date="07" />
		</div>
	);
}

export default WeatherDaily;
