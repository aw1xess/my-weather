import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Nav from "./Nav/Nav";
import Weather from "./Weather/Weather";
//@ts-ignore
import classnames from "classnames";
import "./App.sass";
import { setTheme } from "../redux/store";

function App() {
	const theme = useSelector((state: { theme: string }) => state.theme);
	const dispatch = useDispatch();

	// useEffect(() => {
	// 	const newTheme = theme === "light" ? "dark" : "light";
	// 	localStorage.setItem("theme", newTheme);
	// 	dispatch(setTheme(newTheme));
	// }, [theme]);

	return (
		<div
			className={classnames(
				"app",
				theme === "dark" ? "theme--dark" : "theme--light"
			)}
		>
			<div className="container">
				<Nav />
				<Weather />
			</div>
		</div>
	);
}

export default App;
