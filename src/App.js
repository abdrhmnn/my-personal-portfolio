import React, { useState } from "react";

// component
import Header from "./components/Header/Header";
// style
import "./App.css";

function App() {
	const [toggleDarkMode, SetToggleDarkMode] = useState(false);

	return (
		<div className={`${toggleDarkMode ? "App dark-bg" : "App"}`}>
			<Header toggleDarkMode={toggleDarkMode} SetToggleDarkMode={SetToggleDarkMode} />
			<p>Hello semuanya</p>
		</div>
	);
}

export default App;
