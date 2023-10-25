import React from "react";
// @ts-ignore
import styles from "./WeatherIcon.module.sass";
import defineIcon from "./weather_description";

function WeatherIcon({ weather, hours }: { weather: string; hours: number }) {
	let iconName =
		typeof hours === "number" ? defineIcon(weather, hours) : "sunny";
	return (
		<img
			src={require(`../../assets/images/icons/${iconName}.png`)}
			alt={weather}
			className={styles.icon}
		/>
	);
}

export default WeatherIcon;
