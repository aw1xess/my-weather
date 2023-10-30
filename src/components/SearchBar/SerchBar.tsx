import React, { useState, useEffect } from "react";
import styles from "./SerchBar.module.sass";
import classnames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { setInputFocus } from "../../redux/store";
import WeatherDataService from "../../services/weatherAPI";
import SearchResults from "./SearchResults/SearchResults";

import { v4 as uuidv4 } from "uuid";

type CityData = {
	results: Array<{
		country: { name: string };
		location: { latitude: number; longitude: number };
		name: string;
	}>;
};

function SerchBar() {
	const theme = useSelector((state: { theme: string }) => state.theme);
	const inputFocus = useSelector(
		(state: { inputFocus: string }) => state.inputFocus
	);
	const dispatch = useDispatch();
	const [timer, setTimer] = useState(setTimeout(() => {}, 0));
	const [data, setData] = useState<CityData>();
	const [city, setCity] = useState("");

	function firstToUpper(e: React.ChangeEvent<HTMLInputElement>) {
		let input =
			e.currentTarget.value.length > 0
				? e.currentTarget.value[0].toUpperCase() +
				  e.currentTarget.value.slice(1, e.currentTarget.value.length)
				: "";
		return input;
	}

	function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
		let input = firstToUpper(e);
		setCity(e.currentTarget.value);

		clearTimeout(timer);
		const newTimer = setTimeout(() => {
			WeatherDataService.getCity(input).then((response) => {
				setData(response);
			});
		}, 700);
		setTimer(newTimer);
	}

	function renderSuggestedCities() {
		let toRender: Array<JSX.Element> = [];
		if (data) {
			let maxRecords = data.results.length < 5 ? data.results.length : 5;
			for (let i = 0; i < maxRecords; i++) {
				toRender.push(
					<SearchResults
						key={uuidv4()}
						cityName={data.results[i].name}
						country={data.results[i].country.name}
						lat={data.results[i].location.latitude}
						lon={data.results[i].location.longitude}
					/>
				);
			}
		}
		return toRender;
	}

	return (
		<div
			className={classnames(
				theme === "dark" ? styles.themeDark : styles.themeLight
			)}
		>
			<input
				className={classnames(styles.searchbar)}
				placeholder="Search your city"
				onChange={(e) => handleInputChange(e)}
				onFocus={() => dispatch(setInputFocus(true))}
				onBlur={(e) => {
					dispatch(setInputFocus(false));
				}}
				value={city}
			></input>
			<div
				className={inputFocus ? styles.results : styles.resultsDisabled}
			>
				{renderSuggestedCities()}
			</div>
			<div
				className={
					inputFocus
						? styles.serchbarWrapper
						: styles.serchbarWrapperDisabled
				}
			></div>
		</div>
	);
}

export default SerchBar;
