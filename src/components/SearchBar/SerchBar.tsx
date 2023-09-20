import React from "react";
import styles from "./SerchBar.module.sass";

function SerchBar() {
	return (
		<div>
			<input
				className={styles.searchbar}
				placeholder="Search your city"
			></input>
		</div>
	);
}

export default SerchBar;
