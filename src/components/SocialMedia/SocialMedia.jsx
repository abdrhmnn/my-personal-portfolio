import React from "react";
import "./social-media.css";
import { FaDiscord, FaLinkedin } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { CiDark } from "react-icons/ci";
import { MdOutlineLightMode } from "react-icons/md";

export default function SocialMedia({
	toggleHamburgerMenu,
	SetToggleHamburgerMenu,
	toggleDarkMode,
	SetToggleDarkMode,
}) {
	const openMobileNav = (e) => {
		SetToggleHamburgerMenu(!toggleHamburgerMenu);
	};

	const darkMode = (e) => {
		SetToggleDarkMode(!toggleDarkMode);
	};

	return (
		<div className="social-media-head">
			<a
				href="#discord"
				className={`${toggleDarkMode ? "discord del-discord-shadow" : "discord"}`}
			>
				<FaDiscord />
			</a>
			<a
				href="https://www.linkedin.com/in/abdrhmnn/"
				className={`${toggleDarkMode ? "linked del-linked-shadow" : "linked"}`}
				target="_blank"
				rel="noreferrer"
			>
				<FaLinkedin />
			</a>
			<button
				className={`${toggleDarkMode ? "btn-dark-mode del-shadow" : "btn-dark-mode"}`}
				onClick={darkMode}
			>
				{toggleDarkMode ? <MdOutlineLightMode /> : <CiDark />}
			</button>

			<div
				className={`hamburger-menu ${toggleHamburgerMenu ? "open" : ""} ${
					toggleDarkMode ? "del-hamburger-shadow" : ""
				}`}
				onClick={openMobileNav}
			>
				{toggleHamburgerMenu ? (
					<GrClose />
				) : (
					<>
						<div></div>
						<div></div>
						<div></div>
					</>
				)}
			</div>
		</div>
	);
}
