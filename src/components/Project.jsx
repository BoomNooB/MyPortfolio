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
import GoTodoListAPI from "../assets/images/Go-Todo-API.gif";
import KeyboardBlog from "../assets/images/KeyboardBlog.jpg";
import ScrollNoteIcon from "../assets/images/Scroll-Note.svg";
import TicketGoReact from "../assets/images/TicketGoReact-2.png";
import TicketGoReact2 from "../assets/images/TicketGoReact.gif";

// Tech Stack Icons
import BootstrapIcon from "../assets/images/Bootstrap.svg";
import CSSIcon from "../assets/images/CSS.svg";
import ChartJSIcon from "../assets/images/ChartJS.png";
import DockerIcon from "../assets/images/Docker.svg";
import ExpressIcon from "../assets/images/ExpressJS.svg";
import FigmaIcon from "../assets/images/Figma.svg";
import GitIcon from "../assets/images/Git.svg";
import GithubIcon from "../assets/images/Github.svg";
import GoIcon from "../assets/images/Go.svg";
import Giwon from "../assets/images/Gwon-Only-G.png";
import HTMLIcon from "../assets/images/HTML.svg";
import JavaScriptIcon from "../assets/images/JS.svg";
import MediumIcon from "../assets/images/Medium.svg";
import MongoDBIcon from "../assets/images/MongoDB.svg";
import ReactIcon from "../assets/images/React.svg";
import ReplitIcon from "../assets/images/Replit.svg";

import projectList from "../utils/projectList";

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
		<div
			className="        
		d-none
        d-sm-none
        d-md-none
		d-lg-block
		d-xl-block
		d-xxl-block
"
		>
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
		</div>
	);
};

export default Project;
