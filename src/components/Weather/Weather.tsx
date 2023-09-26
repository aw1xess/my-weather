import React from "react";
import WeatherNow from "../WeatherNow/WeatherNow";
import WeatherHourly from "../WeatherHourly/WeatherHourly";
import WeatherDaily from "../WeatherDaily/WeatherDaily";
//@ts-ignore
import classnames from "classnames";
import { useSelector } from "react-redux";

import styles from "./Weather.module.sass";

function Weather() {
	const theme = useSelector((state: { theme: string }) => state.theme);
	return (
		<div
			className={classnames(
				styles.weather,
				theme === "dark" ? styles.themeDark : styles.themeLight
			)}
		>
			<WeatherNow />
			<WeatherHourly />
			<WeatherDaily />
		</div>
	);
}

export default Weather;
