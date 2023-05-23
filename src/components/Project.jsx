import parse from "html-react-parser";
import React, { Children, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Waypoint } from "react-waypoint";

import InViewContext from "../contexts/InViewContext";
import "../styles/Project.css";

// Project Image
import Amity from "../assets/images/AmityHackathon.jpg";
import ColmarDesktop from "../assets/images/ColmarDesktop.jpg";
import ColmarResponsive from "../assets/images/ColmarResponsive.png";
import FindMyHat from "../assets/images/FindMyHat.gif";
import GTraineeLogin from "../assets/images/G-trainee-Login-SS.png";
import GTraineeHome from "../assets/images/G-trainee-Web-SS.jpg";
import KeyboardBlog from "../assets/images/KeyboardBlog.jpg";

// Tech Stack Icons
import BootstrapIcon from "../assets/images/Bootstrap.svg";
import CSSIcon from "../assets/images/CSS.svg";
import ChartJSIcon from "../assets/images/ChartJS.png";
import ExpressIcon from "../assets/images/ExpressJS.svg";
import FigmaIcon from "../assets/images/Figma.svg";
import GitIcon from "../assets/images/Git.svg";
import GithubIcon from "../assets/images/Github.svg";
import Giwon from "../assets/images/Gwon-Only-G.png";
import HTMLIcon from "../assets/images/HTML.svg";
import JavaScriptIcon from "../assets/images/JS.svg";
import MediumIcon from "../assets/images/Medium.svg";
import MongoDBIcon from "../assets/images/MongoDB.svg";
import ReactIcon from "../assets/images/React.svg";
import ReplitIcon from "../assets/images/Replit.svg";

const projectList = [
	{
		name: "G-Trainee",
		description: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		Get ready to crush your fitness goals with G-Trainee! This
		web-based
		<span className="projectTextHighlightOrange">
			exercise tracking app
		</span>
		is not your average workout companion. Using your
		<span className="projectTextHighlightPink">
			favorite Idol as your target
		</span>
		, G-Trainee is designed to keep you motivated and engaged
		every step of the way. With a sleek and seamless user
		experience, this app makes exercise fun and exciting.`,
		techStack: {
			frontEnd: [HTMLIcon, CSSIcon, ReactIcon, BootstrapIcon, ChartJSIcon],
			backEnd: [ExpressIcon, MongoDBIcon, JavaScriptIcon],
			other: [GitIcon],
		},
		visit: [
			{
				website: "https://reborn-giwon.vercel.app/",
				linkImage: Giwon,
			},
			{
				website: "https://github.com/pramotepon/reborn-giwon/",
				linkImage: GithubIcon,
			},
		],
		images: [GTraineeLogin, GTraineeHome],
	},
	{
		name: "Find My Hat",
		description: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		Find My Hat is a <span className="projectTextHighlightPink">command-line game</span> 
		that allows users to navigate through a field of holes and hats. 
		The goal is to <span className="projectTextHighlightOrange">find the hat without falling into a hole</span>. 
		The game is over if the user falls into a hole or goes out of bounds. 
		The game is won if the user finds the hat.`,
		techStack: {
			frontEnd: null,
			backEnd: [JavaScriptIcon],
			other: [GitIcon],
		},
		visit: [
			{
				website: "https://replit.com/@BoomNooB/FindMyHat",
				linkImage: ReplitIcon,
			},
			{
				website: "https://github.com/BoomNooB/FindMyHat",
				linkImage: GithubIcon,
			},
		],

		images: [FindMyHat, FindMyHat],
	},
	{
		name: "Colmar Academy",
		description: `&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		Colmar Academy is a <span className="projectTextHighlightOrange">landing page for a fictional school</span>. 
			The goal 'of this' project is to build a <span className="projectTextHighlightPink">responsive website</span> that works well on mobile, 
			tablet, and desktop screen sizes. The website is built using 'HTML' and 'CSS'.`,
		techStack: {
			frontEnd: [HTMLIcon, CSSIcon],
			backEnd: null,
			other: [GitIcon],
		},
		visit: [
			{
				website: "https://github.com/BoomNooB/ColmarAcademy",
				linkImage: GithubIcon,
			},
		],

		images: [ColmarResponsive, ColmarDesktop],
	},
	{
		name: "Amity Hackathon 2023",
		description: `&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		Participated in the Amity Hackathon, 
			a <span className="projectTextHighlightOrange">generative AI hackathon</span> with a focus on social impact. 
			Developed an app idea that enables blind people to create art using GPT and midjourneyAI technology, 
			promoting creativity and social engagement.`,
		techStack: {
			frontEnd: [FigmaIcon],
			backEnd: null,
			other: null,
		},
		visit: null,
		images: [Amity, Amity],
	},
	{
		name: "Keychron K4: A Guide to Installing QMK/VIA!",

		description: `&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		I recently wrote a detailed blog post about modifying my Keychron K4 keyboard and installing 
			QMK/VIA firmware to <span className="projectTextHighlightPink">unlock customization options</span>. In the blog, 
			I provide a step-by-step guide on how to <span className="projectTextHighlightOrange">
				remap keys, define macros, and tailor
				the keyboard to your specific preferences
			</span>. Elevate your typing experience with my 
			comprehensive tutorial on Keychron K4 modding!`,
		techStack: {
			frontEnd: null,
			backEnd: null,
			other: null,
		},
		visit: [
			{
				website:
					"https://thatpong.medium.com/%E0%B8%88%E0%B8%B1%E0%B8%9A-keychron-k4-%E0%B8%A5%E0%B8%87-qmk-via-50c409e83946",
				linkImage: MediumIcon,
			},
		],

		images: [KeyboardBlog, KeyboardBlog],
	},
];

const Project = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handlePrevClick = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? projectList.length - 1 : prevIndex - 1
		);
	};

	const handleNextClick = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === projectList.length - 1 ? 0 : prevIndex + 1
		);
	};
	let currentProject = projectList[currentIndex];

	const [onHover, setOnHover] = useState(false);
	const handleMouseHover = () => {
		setOnHover(!onHover);
	};

	const [inDescription, setInDescription] = useState(false);
	const handleInviewDescription = () => {
		setInDescription(!inDescription);
	};

	return (
		<>
			<hr id="projects"></hr> <br></br>
			<br></br>
			<Container className="project-container d-flex">
				<Row>
					<Col
						className="projectArrowLeft col-1 d-flex"
						onClick={handlePrevClick}
					>
						<FaChevronLeft />
					</Col>
					<TransitionGroup>
						<CSSTransition key={currentIndex} timeout={500} classNames="item">
							<Col className="projectDetail-container">
								<h2 className="projectName ">{currentProject.name}</h2>
								{/* InviewChange */}
								<Waypoint
									onEnter={handleInviewDescription}
									onLeave={handleInviewDescription}
								/>

								<Row className="projectDetail">
									<Col className="projectImage">
										{onHover ? (
											<img
												src={currentProject.images[0]}
												alt="projectImage"
												onMouseLeave={handleMouseHover}
												style={{
													width:
														currentProject.images[0] == FindMyHat
															? "30%"
															: "50%",
												}}
											/>
										) : (
											<img
												src={currentProject.images[1]}
												alt="projectImage"
												onMouseOver={handleMouseHover}
												style={{
													width:
														currentProject.images[0] == FindMyHat
															? "30%"
															: "50%",
												}}
											/>
										)}
									</Col>
									<Col className="projectDescription">
										{parse(currentProject.description)}
									</Col>

									<Col className="projectTechStack">
										<Row>
											<Col className="col-3">
												<h3 className="d-none d-lg-block">
													Technologies <br /> Used
												</h3>
												<h3 className="d-lg-none">
													Tech <br></br> Used
												</h3>
											</Col>
											<Col className="projectTechStackSection d-flex">
												{currentProject.techStack.frontEnd ? (
													<ul>
														Front End
														<br></br>
														<li>
															{currentProject.techStack.frontEnd.map(
																(tech, index) => (
																	<img
																		src={tech}
																		key={index}
																		className="projectTechImage"
																	/>
																)
															)}
														</li>
													</ul>
												) : null}

												{currentProject.techStack.backEnd ? (
													<ul>
														BackEnd
														<br></br>
														<li>
															{currentProject.techStack.backEnd.map(
																(tech, index) => (
																	<img
																		src={tech}
																		key={index}
																		className="projectTechImage"
																	/>
																)
															)}
														</li>
													</ul>
												) : null}

												{currentProject.techStack.other ? (
													<ul>
														Other
														<br></br>
														<li>
															{currentProject.techStack.other.map(
																(tech, index) => (
																	<img
																		src={tech}
																		key={index}
																		className="projectTechImage"
																	/>
																)
															)}
														</li>
													</ul>
												) : null}

												{currentProject.visit ? (
													<ul>
														Visit
														<br></br>
														<li>
															{currentProject.visit.map((tech, index) => (
																<a
																	href={tech.website || tech.github}
																	key={index}
																	target="_blank"
																	rel="noopener noreferrer"
																>
																	{tech.linkImage === ReplitIcon ? (
																		<img
																			src={tech.linkImage}
																			key={index}
																			style={{ filter: "invert" }}
																			className="projectTechImage"
																		/>
																	) : (
																		<img
																			src={tech.linkImage}
																			key={index}
																			className="projectTechImageVisit"
																		/>
																	)}
																</a>
															))}
														</li>
													</ul>
												) : null}
											</Col>
										</Row>
									</Col>
								</Row>
							</Col>
						</CSSTransition>
					</TransitionGroup>
					<Col className="projectArrowRight col-1 d-flex">
						<FaChevronRight
							className="projectArrowRightSelf"
							onClick={handleNextClick}
						/>
					</Col>
				</Row>
			</Container>
			<InViewContext.Provider value={inDescription}></InViewContext.Provider>
		</>
	);
};

export default Project;
