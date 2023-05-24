import parse from "html-react-parser";
import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Waypoint } from "react-waypoint";

import "../styles/ProjectResponsive.scss";
import projectList from "../utils/projectList";
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

const ProjectResponsive = () => {
	const [viewingIndex, setViewingIndex] = useState(null);

	const handleInView = (index) => {
		setViewingIndex(index);
	};

	return (
		<div
			id="projects"
			className="
            d-block
        d-sm-block
        d-md-block
		d-lg-none
		d-xl-none
		d-xxl-none

        "
		>
			<Container>
				<h1 className="projectTitle">Projects</h1>
				<Row xs={1} md={2}>
					{Array.from({ length: projectList.length }).map((_, idx) => (
						<Col className="mb-5">
							<Card
								className={
									viewingIndex === idx ? "projectCardInview" : "projectCard"
								}
							>
								{/* <Waypoint
									onEnter={() => handleInView(idx)}
									onLeave={() => handleInView(null)}
								/> */}

								<Card.Img
									variant="top"
									src={projectList[idx].images[0]}
									style={{
										width: "100%",
										height: "15rem",
										objectFit: "cover",
									}}
								/>
								<Card.Body>
									<Card.Title className="projectCardName">
										{projectList[idx].name}
									</Card.Title>
									<Card.Text>{parse(projectList[idx].description)}</Card.Text>
									<Card.Text className="projectCardTech">
										<Col className="projectTechStackSection">
											{projectList[idx].techStack.frontEnd ? (
												<ul>
													Front End
													<br></br>
													<li>
														{projectList[idx].techStack.frontEnd.map(
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

											{projectList[idx].techStack.backEnd ? (
												<ul>
													BackEnd
													<br></br>
													<li>
														{projectList[idx].techStack.backEnd.map(
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

											{projectList[idx].techStack.other ? (
												<ul>
													Other
													<br></br>
													<li>
														{projectList[idx].techStack.other.map(
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

											{projectList[idx].visit ? (
												<ul>
													Visit
													<br></br>
													<li>
														{projectList[idx].visit.map((tech, index) => (
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
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
			</Container>
		</div>
	);
};

export default ProjectResponsive;
