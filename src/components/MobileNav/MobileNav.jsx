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
		document.body.scrollTop = 1365;
		document.documentElement.scrollTop = 1365;
	};

	const scrollToTentang = () => {
		SetToggleHamburgerMenu(false);
		document.body.scrollTop = 2650;
		document.documentElement.scrollTop = 2650;
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
				<p onClick={scrollToTentang}>Tentang</p>
			</nav>
			<div className="mobile-social">
				<a
					href="https://www.discordapp.com/users/runningMan#6778"
					className={`${
						toggleDarkMode ? "mobile-discord del-discord-shadow" : "mobile-discord"
					}`}
					target="_blank"
					rel="noreferrer"
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
