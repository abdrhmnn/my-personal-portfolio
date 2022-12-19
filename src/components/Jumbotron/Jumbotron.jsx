import React from "react";
import "./jumbotron.css";
import animasi from "../../assets/jumbotron-gif.gif";
import animasiDark from "../../assets/jumbotron-gif-dark.gif";
import js from "../../assets/img/javascript.png";
import java from "../../assets/img/java.png";
import sc from "../../assets/img/source-code.png";
import { IoDocumentTextOutline } from "react-icons/io5";

export default function Jumbotron({ toggleDarkMode }) {
	return (
		<div className="jumbotron">
			<div className="wrap-jumbotron">
				<div
					className={`${
						toggleDarkMode ? "jumbotron-title jumbotron-dark-mode" : "jumbotron-title"
					}`}
				>
					<h2>Hello there! 🖐</h2>
					<p>
						Saya adalah fresh graduate yang tertarik dengan web programming dan web
						design, memiliki keinginan untuk terus menggali pengetahuan seputar
						programming.
					</p>
					<button
						className={`${toggleDarkMode ? "btn-cv btn-dark-jumbotron" : "btn-cv"}`}
					>
						<IoDocumentTextOutline /> Lihat CV
					</button>
				</div>
				<div className="jumbotron-animasi">
					<img src={toggleDarkMode ? animasiDark : animasi} alt="Jumbotron Animasi" />
					<img src={js} alt="Javascript Animasi" className="js" />
					<img src={java} alt="Java Animasi" className="java" />
					<img src={sc} alt="Source Code Animasi" className="sc" />
				</div>
			</div>
		</div>
	);
}
