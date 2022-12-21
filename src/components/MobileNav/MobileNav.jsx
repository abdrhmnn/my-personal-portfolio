import React from "react";
import { FaDiscord, FaLinkedin } from "react-icons/fa";
import "./mobile-nav.css";

export default function MobileNav({ toggleDarkMode, SetToggleHamburgerMenu }) {
	const scrollToTop = () => {
		SetToggleHamburgerMenu(false);
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	};

	const scrollToSkills = () => {
		SetToggleHamburgerMenu(false);
		document.body.scrollTop = 245;
		document.documentElement.scrollTop = 245;
	};

	const scrollToProjects = () => {
		SetToggleHamburgerMenu(false);
		document.body.scrollTop = 1380;
		document.documentElement.scrollTop = 1380;
	};

	return (
		<div
			className={`${
				toggleDarkMode ? "mobile-nav dark-mode del-mobile-shadow" : "mobile-nav"
			}`}
		>
			<nav>
				<p onClick={scrollToTop}>Beranda</p>
				<p onClick={scrollToSkills}>Skills</p>
				<p onClick={scrollToProjects}>Projects</p>
				<p>Tentang</p>
			</nav>
			<div className="mobile-social">
				<a
					href="#discord"
					className={`${
						toggleDarkMode ? "mobile-discord del-discord-shadow" : "mobile-discord"
					}`}
				>
					<FaDiscord />
				</a>
				<a
					href="https://www.linkedin.com/in/abdrhmnn/"
					className={`${
						toggleDarkMode ? "mobile-linked del-linked-shadow" : "mobile-linked"
					}`}
					target="_blank"
					rel="noreferrer"
				>
					<FaLinkedin />
				</a>
			</div>
		</div>
	);
}
