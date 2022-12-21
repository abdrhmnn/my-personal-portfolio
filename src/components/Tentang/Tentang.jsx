import React from "react";
import avatar from "../../assets/img/avatar.png";
import "./tentang.css";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

export default function Tentang({ toggleDarkMode }) {
	return (
		<div className="tentang">
			<div className={toggleDarkMode ? "wrap-tentang dark-tentang" : "wrap-tentang"}>
				<h3>Tentang saya</h3>
				<div
					className={toggleDarkMode ? "tentang-saya dark-tentang-saya" : "tentang-saya"}
				>
					<div className="flex-circle">
						<div className="merah"></div>
						<div className="kuning"></div>
						<div className="hijau"></div>
					</div>
					<p>
						Saya merupakan fresh graduate dari Universitas Mercu Buana, Jakarta. Saya
						tertarik dengan pemrograman web terutama di front-end web developer. Saya
						ingin mengasah skill front-end saya dan suka dalam mempelajari banyak hal
						seperti mendesign website, mempelajari lebih dalam mengenai job front-end dan
						selalu berusaha untuk bisa beradaptasi dengan teknologi terbaru.
					</p>
					<div
						className={toggleDarkMode ? "card-tentang dark-card-tentang" : "card-tentang"}
					>
						<div className="img-card">
							<img src={avatar} alt="Img Card" />
						</div>
						<h3>Abdurrahman</h3>
						<p>Web developer</p>
						<div className="social-tentang">
							<div className="wa">
								<a href="https://wa.me/6287785305729" target="_blank" rel="noreferrer">
									<FaWhatsapp />
								</a>
							</div>
							<div className="email">
								<a href="mailto:abdrhmn.gh@gmail.com" target="_blank" rel="noreferrer">
									<AiOutlineMail />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
