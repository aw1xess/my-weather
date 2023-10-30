import React from "react";
import styles from "./WeatherNowDetails.module.sass";
import classnames from "classnames";
import { useSelector } from "react-redux";

function WeatherNowDetails() {
	const theme = useSelector((state: { theme: string }) => state.theme);
	const weather = useSelector((state: { weather: any }) => state.weather);

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

	if (weather.current) {
		return (
			<div
				className={classnames(
					styles.details,
					theme === "dark" ? styles.themeDark : styles.themeLight
				)}
			>
				<div className={styles.sunInfo}>
					<div className={styles.sunrise}>
						<p>Sunrise</p>
						<img
							src={require("../../../assets/images/icons/sunrise.png")}
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
							src={require("../../../assets/images/icons/sunset.png")}
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
						<p className={styles.wind}>Wind</p>
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
		);
	} else {
		return <div></div>;
	}
}

export default WeatherNowDetails;
