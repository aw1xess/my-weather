import React, { useState, useEffect } from "react";
import WeatherOnDay from "../WeatherOnDay/WeatherOnDay";
//@ts-ignore
import classnames from "classnames";
import { useSelector } from "react-redux";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import styles from "./WeatherDaily.module.sass";

function WeatherDaily() {
	const theme = useSelector((state: { theme: string }) => state.theme);
	useEffect(() => {
		let mySwiper = new Swiper(".swiper", {
			modules: [Navigation],
			slidesPerView: 7,
			spaceBetween: 20,
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
		});
	}, []);

	return (
		<div
			className={classnames(
				styles.weatherDaily,
				theme === "dark" ? styles.themeDark : styles.themeLight
			)}
		>
			<div className={classnames("swiper", styles.swiper)}>
				<div
					className={classnames(
						"swiper-wrapper",
						styles.swiperWrapper
					)}
				>
					<div
						className={classnames(
							"swiper-slide",
							styles.swiperSlide
						)}
					>
						<WeatherOnDay day="Mon" date="01" />
					</div>
					<div
						className={classnames(
							"swiper-slide",
							styles.swiperSlide
						)}
					>
						<WeatherOnDay day="Tue" date="02" />
					</div>
					<div
						className={classnames(
							"swiper-slide",
							styles.swiperSlide
						)}
					>
						<WeatherOnDay day="Wed" date="03" />
					</div>
					<div
						className={classnames(
							"swiper-slide",
							styles.swiperSlide
						)}
					>
						<WeatherOnDay day="Thu" date="04" />
					</div>
					<div
						className={classnames(
							"swiper-slide",
							styles.swiperSlide
						)}
					>
						<WeatherOnDay day="Fri" date="05" />
					</div>
					<div
						className={classnames(
							"swiper-slide",
							styles.swiperSlide
						)}
					>
						<WeatherOnDay day="Sat" date="06" />
					</div>
					<div
						className={classnames(
							"swiper-slide",
							styles.swiperSlide
						)}
					>
						<WeatherOnDay day="Sun" date="07" />
					</div>
					<div
						className={classnames(
							"swiper-slide",
							styles.swiperSlide
						)}
					>
						<WeatherOnDay day="Mon" date="08" />
					</div>
					<div
						className={classnames(
							"swiper-slide",
							styles.swiperSlide
						)}
					>
						<WeatherOnDay day="Tue" date="09" />
					</div>
					<div
						className={classnames(
							"swiper-slide",
							styles.swiperSlide
						)}
					>
						<WeatherOnDay day="Wed" date="10" />
					</div>
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
//<a href="" className={styles.arrowRight}></a>
//<a href="" className={styles.arrowLeft}></a>

export default WeatherDaily;
