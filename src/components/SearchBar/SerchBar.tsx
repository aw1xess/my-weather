import React from "react";
import styles from "./SerchBar.module.sass";
//@ts-ignore
import classnames from "classnames";
import { useSelector } from "react-redux";

function SerchBar() {
	const theme = useSelector((state: { theme: string }) => state.theme);
	return (
		<div>
			<input
				className={classnames(
					styles.searchbar,
					theme === "dark" ? styles.themeDark : styles.themeLight
				)}
				placeholder="Search your city"
			></input>
		</div>
	);
}

export default SerchBar;
