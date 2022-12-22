import React from "react";
import java from "../../assets/img/java.png";
import javascript from "../../assets/img/javascript.png";
import css3 from "../../assets/img/css3.png";
import html5 from "../../assets/img/html5.png";
import materialui from "../../assets/img/material-ui.png";
import mysql from "../../assets/img/mysql.png";
import nodejs from "../../assets/img/nodejs.png";
import react from "../../assets/img/react.png";
import redux from "../../assets/img/redux.png";
import "./skills.css";

export default function Skills({ toggleDarkMode }) {
	return (
		<div className="my-skills">
			<div
				className={`${toggleDarkMode ? "wrap-my-skills wrap-sk-dark" : "wrap-my-skills"}`}
			>
				<h3>My skills</h3>
				<div className={`${toggleDarkMode ? "grid-skills grid-sk-dark" : "grid-skills"}`}>
					<div className="wrap-js">
						<img src={javascript} alt="Javascript" />
					</div>
					{/* <div className="wrap-java">
						<img src={java} alt="Java" />
					</div> */}
					<div className="wrap-css">
						<img src={css3} alt="CSS3" />
					</div>
					<div className="wrap-html">
						<img src={html5} alt="HTML5" />
					</div>
					<div className="wrap-material">
						<img src={materialui} alt="Material UI" />
					</div>
					<div className="wrap-mysql">
						<img src={mysql} alt="MySQL" />
					</div>
					<div className="wrap-nodejs">
						<img src={nodejs} alt="Node JS" />
					</div>
					<div className="wrap-react">
						<img src={react} alt="React JS" />
					</div>
					<div className="wrap-redux">
						<img src={redux} alt="Redux" />
					</div>
				</div>
			</div>
		</div>
	);
}
