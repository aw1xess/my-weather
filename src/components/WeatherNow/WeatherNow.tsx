import React, { useState } from "react";
import styles from "./WeatherNow.module.sass";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import LoaderCircle from "../LoaderCircle/LoaderCircle";
// @ts-ignore
import sunrise from "../../assets/images/icons/sunrise.png";
// @ts-ignore
import sunset from "../../assets/images/icons/sunset.png";
//@ts-ignore
import classnames from "classnames";
import { useSelector } from "react-redux";

function WeatherNow() {
	let date = new Date();
	let day = date.getDay();
	let month = date.getMonth();
	let time = convertTime(date);

	const theme = useSelector((state: { theme: string }) => state.theme);
	const weather = useSelector((state: { weather: any }) => state.weather);

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

	const [currentTime, changeTime] = useState(time);

	function checkTime() {
		let time = convertTime(new Date());
		changeTime(time);
	}

	setInterval(checkTime, 1000);

	function convertTime(date: Date) {
		let hours: string | number = date.getHours();
		let minutes: string | number = date.getMinutes();
		if (hours < 10) {
			hours = "0" + hours;
		}
		if (minutes < 10) {
			minutes = "0" + minutes;
		}
		return `${hours}:${minutes}`;
	}

	return (
		<div
			className={classnames(
				styles.weatherNow,
				theme === "dark" ? styles.themeDark : styles.themeLight
			)}
		>
			<div className={styles.info}>
				<div className={styles.icon}>
					<WeatherIcon
						weather={weather.current.weather[0].description}
						hours={date.getHours()}
					/>
				</div>

				<p className={styles.temperature}>
					{Math.round(weather.current.temp)}
					°C
				</p>
				<p className={styles.city}>Kyiv</p>
				<p className={styles.time}>{currentTime}</p>
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
						<p className={styles.sunriseTime}>
							{convertTime(
								new Date(weather.current.sunrise * 1000)
							)}
						</p>
					</div>
					<div className={styles.sunset}>
						<p>Sunset</p>
						<img
							src={sunset}
							alt="Sunset"
							className={styles.sunsetImg}
						/>
						<p className={styles.sunsetTime}>
							{convertTime(
								new Date(weather.current.sunset * 1000)
							)}
						</p>
					</div>
				</div>
				<div className={styles.options}>
					<div className={styles.optionsNames}>
						<p className={styles.humidity}>Humidity</p>
						<p className={styles.clouds}>Cloudiness</p>
						<p className={styles.wind}>Wind speed</p>
					</div>
					<div className={styles.optionsValues}>
						<p>{weather.current.humidity}%</p>
						<p>{weather.current.clouds}%</p>
						<p>
							{Math.round(weather.current.wind_speed * 10) / 10}{" "}
							m/s
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WeatherNow;
