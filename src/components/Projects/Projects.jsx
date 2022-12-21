import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { dataProjects } from "../../data";
import { IoLogoGithub } from "react-icons/io";
import { FiExternalLink } from "react-icons/fi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Modal from "react-modal";
import quote from "../../assets/img/quote-1.png";
import markdown from "../../assets/img/markdown-1.png";
import qr from "../../assets/img/qr-1.png";
import react from "../../assets/img/react.png";
import redux from "../../assets/img/redux.png";
import sass from "../../assets/img/sass.png";
import html5 from "../../assets/img/html5.png";
import javascript from "../../assets/img/javascript.png";
import tailwind from "../../assets/img/tailwind.png";
import "./projects.css";

export default function Projects({ toggleDarkMode }) {
	const [modalIsOpen, setIsOpen] = useState(false);
	const [imgName, setImgName] = useState(null);
	const [techStack, setTechStack] = useState([]);
	const [dataModal, setDataModal] = useState(null);
	const [dataIdModal, setDataIdModal] = useState(null);

	const customStyles = {
		overlay: {
			backgroundColor: "#1a1a1a4a",
			zIndex: 10,
		},
		content: {
			padding: 20,
			top: "50%",
			left: "50%",
			right: "auto",
			bottom: "auto",
			marginRight: "-50%",
			transform: "translate(-50%, -50%)",
			backgroundColor: "#374151",
		},
	};

	Modal.setAppElement("#root");

	function openModal(index, id) {
		setDataIdModal(index);
		switch (index) {
			case 0:
				setTechStack((techStack) => [react, redux, sass]);
				setImgName(quote);
				break;
			case 1:
				setTechStack((techStack) => [react, redux, sass]);
				setImgName(markdown);
				break;
			case 2:
				setTechStack((techStack) => [html5, javascript, tailwind]);
				setImgName(qr);
				break;
			default:
				setImgName(null);
		}

		setDataModal(() => dataProjects.filter((e, i) => e.id === id));
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

	function createDeskripsiModal(el, index) {
		switch (dataIdModal) {
			case 0:
				return (
					<TabPanel>
						<div className="modal-desc-panel">
							<h3>{el.nama}</h3>
							<p className="paragraf-desc">
								Aplikasi random quote machine dibuat berdasarkan final exam dari pelatihan
								yang diberikan oleh{" "}
								<a href="https://freeCodeCamp.org" target="_blank" rel="noreferrer">
									freeCodeCamp.org
								</a>{" "}
								dimana aplikasi ini berguna men-generate quote secara acak yang diambil
								berdasarkan public API dari{" "}
								<a href="https://api.quotable.io/random" target="_blank" rel="noreferrer">
									api.quotable.io
								</a>
								. Dalam aplikasi ini saya belajar bagaimana mengelola state management di
								React JS dengan menggunakan Redux serta konsep styling dengan SASS.
							</p>
						</div>
					</TabPanel>
				);
			case 1:
				return (
					<TabPanel>
						<div className="modal-desc-panel">
							<h3>{el.nama}</h3>
							<p className="paragraf-desc">
								Ini aplikasi kedua yang dibuat berdasarkan final exam dari pelatihan yang
								diberikan oleh{" "}
								<a href="https://freeCodeCamp.org" target="_blank" rel="noreferrer">
									freeCodeCamp.org
								</a>{" "}
								dimana aplikasi ini menggunakan package{" "}
								<a href="https://marked.js.org/" target="_blank" rel="noreferrer">
									marked
								</a>{" "}
								untuk bisa menggunakan kode markdown di dalam aplikasi. Aplikasi ini
								memungkinkan untuk bisa mengubah bahasa markdown secara realtime.
							</p>
						</div>
					</TabPanel>
				);
			case 2:
				return (
					<TabPanel>
						<div className="modal-desc-panel">
							<h3>{el.nama}</h3>
							<p className="paragraf-desc">
								Aplikasi yang digunakan untuk men-generate kode QR berdasarkan link URL
								yang dimasukkan. Aplikasi ini menggunakan package{" "}
								<a
									href="https://davidshimjs.github.io/qrcodejs/"
									target="_blank"
									rel="noreferrer"
								>
									qrcodejs
								</a>{" "}
								untuk men-generate URL menjadi QR Code. Dalam pembuatan aplikasi ini saya
								belajar menggunakan library css Tailwind untuk styling aplikasi.
							</p>
						</div>
					</TabPanel>
				);
			default:
				return null;
		}
	}

	return (
		<div className="projects">
			<div className="wrap-projects">
				<h3>My Projects</h3>
				<div className="grid-tabs">
					<Tabs>
						<TabList className="tabs-head">
							<Tab>All</Tab>
							<Tab>Web Apps</Tab>
							<Tab>Slicing Design</Tab>
						</TabList>

						<TabPanel>
							<div className="grid-card-app">
								{dataProjects.map((e, i) => {
									return (
										<div className="card-app" key={i}>
											<div className="date-app">
												<p>{e.date}</p>
												<div className="link-app">
													<a href={e.github} target="_blank" rel="noreferrer">
														<IoLogoGithub />
													</a>
													<a href={e.link} target="_blank" rel="noreferrer">
														<FiExternalLink />
													</a>
												</div>
											</div>
											<p>{e.nama}</p>
											<p>{e.desc}</p>
											<p onClick={() => openModal(i, i + 1)}>Lihat detail</p>
											<Modal
												isOpen={modalIsOpen}
												// onAfterOpen={afterOpenModal}
												onRequestClose={closeModal}
												style={customStyles}
												contentLabel="Detail App"
											>
												<div className="modal-content">
													<div className="close-btn" onClick={closeModal}>
														<AiOutlineCloseCircle />
													</div>
													<div className="grid-modal-content">
														<div className="modal-img-tech">
															<div className="modal-img">
																<img src={imgName} alt="Contoh Gambar" />
															</div>
															<div className="modal-tech">
																<p>Teknologi Stack : </p>
																<div className="flex-img">
																	{techStack.map((e, i) => {
																		return <img src={e} alt="Stack Teknologi" key={i} />;
																	})}
																</div>
															</div>
														</div>
														<div className="modal-desc">
															{dataModal &&
																dataModal.map((e, i) => {
																	// console.log(e);
																	return (
																		<Tabs
																			selectedTabClassName="select-tabs"
																			className="modal-tabs"
																			key={i}
																		>
																			<TabList className="modal-tabs-head">
																				<Tab>Deskripsi</Tab>
																				<Tab>Timeline</Tab>
																			</TabList>

																			{createDeskripsiModal(e, i)}
																			<TabPanel>
																				<div className="abdu">
																					<h2>Still doesn't work! 🐱‍💻</h2>
																				</div>
																			</TabPanel>
																		</Tabs>
																	);
																})}
														</div>
													</div>
												</div>
											</Modal>
										</div>
									);
								})}
							</div>
						</TabPanel>
						<TabPanel>
							<h2>Any content 2</h2>
						</TabPanel>
						<TabPanel>
							<h2>Any content 3</h2>
						</TabPanel>
					</Tabs>
				</div>
			</div>
		</div>
	);
}
