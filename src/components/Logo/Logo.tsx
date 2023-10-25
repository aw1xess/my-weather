import React from "react";
import styles from "./Logo.module.sass";

function Logo() {
	return (
		<div className={styles.logo}>
			<span className={styles.logoPart}>My</span>
			Weather
		</div>
	);
}

export default Logo;
