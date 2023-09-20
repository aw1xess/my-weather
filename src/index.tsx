import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
//@ts-ignore
import store from "./redux/store/index";
import App from "./components/App";
import "./index.sass";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
