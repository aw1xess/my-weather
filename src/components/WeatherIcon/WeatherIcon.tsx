import React from "react";
// @ts-ignore
import sunny from "../../assets/images/icons/sunny.png";
import styles from "./WeatherIcon.module.sass";

function WeatherIcon() {
	return <img src={sunny} alt="sunny" className={styles.icon} />;
}

export default WeatherIcon;
