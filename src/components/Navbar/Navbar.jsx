import React from "react";
import "./navbar.css";

export default function Navbar({ toggleDarkMode }) {
	return (
		<nav className={`${toggleDarkMode ? "navbar del-navbar-shadow" : "navbar"}`}>
			<a href="#beranda">Beranda</a>
			<a href="#skills">Skills</a>
			<a href="#projects">Projects</a>
			<a href="#tentang">Tentang</a>
		</nav>
	);
}
