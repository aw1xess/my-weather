import React from "react";
import styles from "./SearchResults.module.sass";
import classnames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { setCity, setLocation } from "../../../redux/store";

type Results = {
	cityName: string;
	country: string;
	lat: number;
	lon: number;
};

function SearchResults({ cityName, country, lat, lon }: Results) {
	const theme = useSelector((state: { theme: string }) => state.theme);
	const dispatch = useDispatch();

	function handleUserChoice() {
		dispatch(setCity(cityName));
		dispatch(setLocation({ lat: lat, lon: lon }));
		localStorage.setItem("city", cityName);
		localStorage.setItem("lat", `${lat}`);
		localStorage.setItem("lon", `${lon}`);
	}

	return (
		<div
			className={classnames(
				styles.result,
				theme === "dark" ? styles.themeDark : styles.themeLight
			)}
			onMouseDown={handleUserChoice}
		>
			{cityName}, {country}
		</div>
	);
}

export default SearchResults;
