import React from "react";
import "./navbar.css";

export default function Navbar({ toggleDarkMode }) {
	const scrollToTop = () => {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	};

	const scrollToSkills = () => {
		document.body.scrollTop = 540;
		document.documentElement.scrollTop = 540;
	};

	const scrollToProjects = () => {
		document.body.scrollTop = 1180;
		document.documentElement.scrollTop = 1180;
	};

	return (
		<nav className={`${toggleDarkMode ? "navbar del-navbar-shadow" : "navbar"}`}>
			<p onClick={scrollToTop}>Beranda</p>
			<p onClick={scrollToSkills}>Skills</p>
			<p onClick={scrollToProjects}>Projects</p>
			<p>Tentang</p>
		</nav>
	);
}
