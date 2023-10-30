import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Nav from "./Nav/Nav";
import Weather from "./Weather/Weather";
import WeatherNowDetails from "./WeatherNow/WeatherNowDetails/WeatherNowDetails";
import classnames from "classnames";
import "./App.sass";

function App() {
	const theme = useSelector((state: { theme: string }) => state.theme);
	const inputFocus = useSelector(
		(state: { inputFocus: string }) => state.inputFocus
	);
	const [screenSize, setScreenSize] = useState(getCurrentDimension());

	function getCurrentDimension() {
		return {
			width: window.innerWidth,
			height: window.innerHeight,
		};
	}

	useEffect(() => {
		const updateDimension = () => {
			setScreenSize(getCurrentDimension());
		};
		window.addEventListener("resize", updateDimension);

		return () => {
			window.removeEventListener("resize", updateDimension);
		};
	}, [screenSize]);

	return (
		<div
			className={classnames(
				"app",
				theme === "dark" ? "theme--dark" : "theme--light",
				inputFocus ? "disabled" : ""
			)}
		>
			<div className="container">
				<Nav />
				<Weather />
				{screenSize.width < 640 ? <WeatherNowDetails /> : null}
			</div>
		</div>
	);
}

export default App;
