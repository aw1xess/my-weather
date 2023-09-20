import React from "react";
import styles from "./Nav.module.sass";
import Logo from "../Logo/Logo";
import SerchBar from "../SearchBar/SerchBar";
import SwitchTheme from "../SwitchTheme/SwitchTheme";

function Nav() {
	return (
		<nav className={styles.nav}>
			<Logo />
			<SerchBar />
			<SwitchTheme />
		</nav>
	);
}

export default Nav;
