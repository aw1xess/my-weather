import React, { useEffect } from "react";
import WeatherOnDay from "../WeatherOnDay/WeatherOnDay";
//@ts-ignore
import classnames from "classnames";
import { useSelector } from "react-redux";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";

import "swiper/scss";
import "swiper/scss/navigation";
import { v4 as uuidv4 } from "uuid";
import styles from "./WeatherDaily.module.sass";

function WeatherDaily() {
	const theme = useSelector((state: { theme: string }) => state.theme);
	const weather = useSelector((state: { weather: any }) => state.weather);

	useEffect(() => {
		let mySwiper = new Swiper(".swiperDaily", {
			modules: [Navigation],
			slidesPerView: 7,
			spaceBetween: 20,
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
		});
	}, []);

	function render() {
		let toRender: Array<JSX.Element> = [];
		for (let i = 0; i < 8; i++) {
			toRender.push(
				<div className={classnames("swiper-slide", styles.swiperSlide)}>
					<WeatherOnDay
						key={uuidv4()}
						timestamp={weather.daily[i].dt * 1000}
						minTemp={Math.round(weather.daily[i].temp.min)}
						maxTemp={Math.round(weather.daily[i].temp.max)}
						weatherDescription={
							weather.daily[i].weather[0].description
						}
					/>
				</div>
			);
		}
		return toRender;
	}

	return (
		<div
			className={classnames(
				styles.weatherDaily,
				theme === "dark" ? styles.themeDark : styles.themeLight
			)}
		>
			<div className={classnames("swiper", "swiperDaily", styles.swiper)}>
				<div
					className={classnames(
						"swiper-wrapper",
						styles.swiperWrapper
					)}
				>
					{render()}
				</div>
			</div>
			<div
				className={classnames(
					"swiper-button-prev",
					styles.swiperPrevButton
				)}
			></div>
			<div
				className={classnames(
					"swiper-button-next",
					styles.swiperNextButton
				)}
			></div>
		</div>
	);
}

export default WeatherDaily;
