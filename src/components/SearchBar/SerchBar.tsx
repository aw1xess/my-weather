import React, { useState, useEffect } from "react";
import styles from "./SerchBar.module.sass";
//@ts-ignore
import classnames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { setCity } from "../../redux/store";
import WeatherDataService from "../../services/weatherAPI";
import SearchResults from "./SearchResults/SearchResults";

import { v4 as uuidv4 } from "uuid";

type cityData = {
	results: Array<{
		country: { name: string };
		location: { latitude: number; longitude: number };
		name: string;
	}>;
};

function SerchBar() {
	const theme = useSelector((state: { theme: string }) => state.theme);
	const city = useSelector((state: { city: string }) => state.city);
	const dispatch = useDispatch();
	const [focus, setFocus] = useState(false);
	const [timer, setTimer] = useState(setTimeout(() => {}, 0));
	const [data, setData] = useState<cityData>();

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
		dispatch(setCity(e.currentTarget.value));

		clearTimeout(timer);
		const newTimer = setTimeout(() => {
			WeatherDataService.getCity(input).then((response) => {
				setData(response);
			});
		}, 1000);
		setTimer(newTimer);
	}

	function renderSuggestedCities() {
		let toRender: Array<JSX.Element> = [];
		if (data) {
			let maxRecords =
				data.results.length < 10 ? data.results.length : 10;
			for (let i = 0; i < maxRecords; i++) {
				toRender.push(
					<SearchResults
						key={uuidv4()}
						city={data.results[i].name}
						country={data.results[i].country.name}
					/>
				);
			}
		}
		return toRender;
	}

	return (
		<div>
			<input
				className={classnames(
					styles.searchbar,
					theme === "dark" ? styles.themeDark : styles.themeLight
				)}
				placeholder="Search your city"
				onChange={(e) => handleInputChange(e)}
				onFocus={() => setFocus(true)}
				onBlur={(e) => {
					dispatch(setCity(firstToUpper(e)));
					setFocus(false);
				}}
				value={city}
			></input>
			<div className={focus ? styles.results : styles.resultsDisabled}>
				{renderSuggestedCities()}
			</div>
		</div>
	);
}

export default SerchBar;
