import React, { useState } from "react";
import styles from "./WeatherNow.module.sass";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
// @ts-ignore
import sunrise from "../../assets/images/icons/sunrise.png";
// @ts-ignore
import sunset from "../../assets/images/icons/sunset.png";

function WeatherNow() {
	let date = new Date();
	let day = date.getDay();
	let month = date.getMonth();
	let time = date.toLocaleTimeString();

	const days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	] as const;

	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	] as const;

	let [currentTime, changeTime] = useState(time);

	function checkTime() {
		time = new Date().toLocaleTimeString();
		changeTime(time);
	}

	setInterval(checkTime, 1000);

	return (
		<div className={styles.weatherNow}>
			<div className={styles.info}>
				<WeatherIcon />
				<p className={styles.temperature}>26 °C</p>
				<p className={styles.city}>Kyiv</p>
				<p className={styles.time}>{currentTime.slice(0, -3)}</p>
				<p className={styles.date}>
					{days[day]} {date.getDate()}, {months[month]}
				</p>
			</div>
			<div className={styles.details}>
				<div className={styles.sunInfo}>
					<div className={styles.sunrise}>
						<p>Sunrise</p>
						<img
							src={sunrise}
							alt="Sunrise"
							className={styles.sunriseImg}
						/>
						<p className={styles.sunriseTime}>05:40</p>
					</div>
					<div className={styles.sunset}>
						<p>Sunset</p>
						<img
							src={sunset}
							alt="Sunset"
							className={styles.sunsetImg}
						/>
						<p className={styles.sunsetTime}>20:40</p>
					</div>
				</div>
				<div className={styles.options}>
					<div className={styles.optionsNames}>
						<p className={styles.wind}>Wind speed</p>
						<p className={styles.humidity}>Humidity</p>
						<p className={styles.rainChance}>Chance of rain</p>
					</div>
					<div className={styles.optionsValues}>
						<p>10 km/h</p>
						<p>55%</p>
						<p>10 %</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WeatherNow;
