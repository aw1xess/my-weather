import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./SwitchTheme.module.sass";

import { set } from "../../redux/store";

function SwitchTheme() {
	const theme = useSelector((state: { theme: string }) => state.theme);
	const dispatch = useDispatch();

	const handleChange = () => {
		const next = theme === "light" ? "dark" : "light";
		dispatch(set(next));
		console.log("clicked");
	};
	return (
		<div className={styles.toggleSwitch}>
			<label className={styles.themeLabel}>
				<input
					type="checkbox"
					className={styles.themeInput}
					onChange={handleChange}
				/>
				<span className={styles.slider}></span>
			</label>
		</div>
	);
}

export default SwitchTheme;
