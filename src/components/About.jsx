import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaBeer, FaHeart } from "react-icons/fa";
import BootstrapIcon from "../assets/images/Bootstrap.svg";
import CLIIcon from "../assets/images/CLI.png";
import CSSIcon from "../assets/images/CSS.svg";
import DockerIcon from "../assets/images/Docker.svg";
import ExpressIcon from "../assets/images/ExpressJS.svg";
import FigmaIcon from "../assets/images/Figma.svg";
import GitIcon from "../assets/images/Git.svg";
import GoIcon from "../assets/images/Go.svg";
import HTMLIcon from "../assets/images/HTML.svg";
import JSIcon from "../assets/images/JS.svg";
import MongoDBIcon from "../assets/images/MongoDB.svg";
import PythonIcon from "../assets/images/Python.svg";
import ReactIcon from "../assets/images/React.svg";
import NodeJSIcon from "../assets/images/nodejs.svg";

import profilePic from "../assets/images/profilePic.jpg";
import "../styles/About.css";

const About = () => {
	return (
		<>
			<br id="about"></br>
			<Container fluid className="about-section">
				<Container>
					<Row className="align-items-center">
						<Col
							className="myProfilePic 
						d-sm-none
						d-none
						d-lg-block"
						>
							<img src={profilePic} alt="profile" className="img-fluid" />
						</Col>
						<Col className="myAboutMe">
							<div className="myFullName d-flex flex-column ">
								<h1 className="d-flex justify-content-center align-items-center">
									THATPONG PALEEKAN
								</h1>
								{/* Responsive Picture */}
								<Col
									className="myProfilePic 
									d-sm-block 
									d-lg-none
								justify-content-center d-flex"
								>
									<img
										src={profilePic}
										alt="profile"
										className="img-fluid"
										width="100%"
									/>
								</Col>
							</div>
							<hr></hr>
							<div className="myHelloMessage">
								<h3>Hi there! </h3>
								<p>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									I'm <span className="myNickName">Boom</span> a soon-to-be-grad
									in Electrical Engineering. But you know what? After a few
									years, I discovered my true passion for software development.
									It's like{" "}
									<span className="myLoveMessage">
										falling in love! <FaHeart />
									</span>{" "}
									<br></br>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Now,
									if you're looking to add a cool person to your team, give me a
									call! Together, let's create something amazing and bring the
									magic to life!
								</p>
								<div className="mySkill">
									<ul>
										<div>
											<h5>Front End</h5>
											<div className="mySkillFrontEnd">
												<li>
													<img src={HTMLIcon} />
													<img src={CSSIcon} />
													<img src={JSIcon} />
													<img src={ReactIcon} />
													<img src={BootstrapIcon} />
													<img src={FigmaIcon} />
												</li>
											</div>
										</div>

										<div>
											<h5>Back End</h5>
											<div className="mySkillBackEnd">
												<li>
													<img src={NodeJSIcon} />
													<img src={ExpressIcon} />
													<img src={MongoDBIcon} />
													<img src={GoIcon} width={48} />
													<img src={DockerIcon} />
												</li>
											</div>
										</div>
										{/* Others */}
										<div>
											<h5>Others</h5>
											<div className="mySkillOthers">
												<li>
													<img src={PythonIcon} />
													<img src={GitIcon} />
													<img src={CLIIcon} width={48} />
												</li>
											</div>
										</div>
									</ul>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</Container>
		</>
	);
};

export default About;
