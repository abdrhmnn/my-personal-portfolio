import React from "react";
import "./navbar.css";

export default function Navbar({ toggleDarkMode }) {
	const scrollToTop = () => {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	};

	const scrollToSkills = () => {
		document.body.scrollTop = 510;
		document.documentElement.scrollTop = 510;
	};

	const scrollToProjects = () => {
		document.body.scrollTop = 1120;
		document.documentElement.scrollTop = 1120;
	};

	const scrollToTentang = () => {
		document.body.scrollTop = 1895;
		document.documentElement.scrollTop = 1895;
	};

	return (
		<nav className={`${toggleDarkMode ? "navbar del-navbar-shadow" : "navbar"}`}>
			<p onClick={scrollToTop}>Beranda</p>
			<p onClick={scrollToSkills}>Skills</p>
			<p onClick={scrollToProjects}>Projects</p>
			<p onClick={scrollToTentang}>Tentang</p>
		</nav>
	);
}
