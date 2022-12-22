import React from "react";
import "./jumbotron.css";
import js from "../../assets/img/javascript.png";
// import java from "../../assets/img/java.png";
import sc from "../../assets/img/source-code.png";
import { IoDocumentTextOutline } from "react-icons/io5";
import Lottie from "react-lottie-player";
import animationData from "../../data/gif-lottie-jumbotron-light";

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
					<a
						href="https://drive.google.com/file/d/1AlVjIVo6NvC7ukCuJRZ6tqz32WLUiYDN/view?usp=sharing"
						className={`${toggleDarkMode ? "btn-cv btn-dark-jumbotron" : "btn-cv"}`}
						target="_blank"
						rel="noreferrer"
					>
						<IoDocumentTextOutline /> Lihat CV
					</a>
				</div>
				<div className="jumbotron-animasi">
					<div className="animasi-lottie">
						<Lottie loop animationData={animationData} play />
					</div>
					<img src={js} alt="Javascript Animasi" className="js" />
					{/* <img src={java} alt="Java Animasi" className="java" /> */}
					<img src={sc} alt="Source Code Animasi" className="sc" />
				</div>
			</div>
		</div>
	);
}
