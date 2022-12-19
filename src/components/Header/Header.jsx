import React, { useState, useEffect } from "react";
import MobileNav from "../MobileNav/MobileNav";
import Navbar from "../Navbar/Navbar";
import SocialMedia from "../SocialMedia/SocialMedia";
import "./header.css";

export default function Header({ toggleDarkMode, SetToggleDarkMode }) {
	const [toggleHamburgerMenu, SetToggleHamburgerMenu] = useState(false);
	const [scroll, setScroll] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			setScroll(window.scrollY > 5);
		});
	}, []);

	return (
		<header
			className={
				toggleDarkMode
					? "header dark-mode dark-scroll-shadow del-header-shadow"
					: scroll
					? "header scroll-shadow"
					: "header"
			}
		>
			<div className="grad-bar"></div>
			<div className="wrap-header">
				<h4>Abdurrahman</h4>
				<Navbar toggleDarkMode={toggleDarkMode} />
				<SocialMedia
					toggleHamburgerMenu={toggleHamburgerMenu}
					SetToggleHamburgerMenu={SetToggleHamburgerMenu}
					toggleDarkMode={toggleDarkMode}
					SetToggleDarkMode={SetToggleDarkMode}
				/>
			</div>
			{toggleHamburgerMenu ? <MobileNav toggleDarkMode={toggleDarkMode} /> : null}
		</header>
	);
}
