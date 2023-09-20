import React, { useState } from "react";
import { useSelector } from "react-redux";
import Nav from "./Nav/Nav";
import Weather from "./Weather/Weather";
//@ts-ignore
import classnames from "classnames";
import "./App.sass";

function App() {
	const theme = useSelector((state: { theme: string }) => state.theme);

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
