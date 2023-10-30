import React from "react";
import styles from "./Logo.module.sass";
import classnames from "classnames";
import { useSelector } from "react-redux";

function Logo() {
	const inputFocus = useSelector(
		(state: { inputFocus: string }) => state.inputFocus
	);
	return (
		<div
			className={classnames(
				styles.logo,
				inputFocus ? styles.logoDisabled : ""
			)}
		>
			<span className={styles.logoPart}>My</span>
			Weather
		</div>
	);
}

export default Logo;
