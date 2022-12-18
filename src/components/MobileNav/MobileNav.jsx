import React from "react";
import { FaDiscord, FaLinkedin } from "react-icons/fa";
import "./mobile-nav.css";

export default function MobileNav({ toggleDarkMode }) {
	return (
		<div
			className={`${
				toggleDarkMode ? "mobile-nav dark-mode del-mobile-shadow" : "mobile-nav"
			}`}
		>
			<nav>
				<a href="#beranda">Beranda</a>
				<a href="#skills">Skills</a>
				<a href="#projects">Projects</a>
				<a href="#tentang">Tentang</a>
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
