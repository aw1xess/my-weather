import React from "react";
import styles from "./Logo.module.sass";
//@ts-ignore
import classnames from "classnames";
import { useSelector } from "react-redux";

function Logo() {
	const theme = useSelector((state: { theme: string }) => state.theme);
	return (
		<div className={styles.logo}>
			<span
				className={classnames(
					theme === "dark"
						? styles.logoPartLight
						: styles.logoPartDark,
					styles.logoPart
				)}
			>
				My
			</span>
			Weather
		</div>
	);
}

export default Logo;
