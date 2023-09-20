import React from "react";
import WeatherNow from "../WeatherNow/WeatherNow";
import WeatherHourly from "../WeatherHourly/WeatherHourly";
import WeatherDaily from "../WeatherDaily/WeatherDaily";

import styles from "./Weather.module.sass";

function Weather() {
	return (
		<div className={styles.weather}>
			<WeatherNow />
			<WeatherHourly />
			<WeatherDaily />
		</div>
	);
}

export default Weather;
