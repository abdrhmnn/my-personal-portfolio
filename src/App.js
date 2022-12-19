import React, { useState } from "react";

// component
import Header from "./components/Header/Header";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Skills from "./components/Skills/Skills";
// style
import "./App.css";

function App() {
	const [toggleDarkMode, SetToggleDarkMode] = useState(false);

	return (
		<div className={`${toggleDarkMode ? "App dark-bg" : "App"}`}>
			<Header toggleDarkMode={toggleDarkMode} SetToggleDarkMode={SetToggleDarkMode} />
			<Jumbotron toggleDarkMode={toggleDarkMode} />
			<Skills toggleDarkMode={toggleDarkMode} />
		</div>
	);
}

export default App;
