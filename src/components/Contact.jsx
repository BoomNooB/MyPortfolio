import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Col, Container } from "react-bootstrap";
import Github from "../assets/images/Github-badge.svg";
import Gmail from "../assets/images/Gmail.svg";
import Linkedin from "../assets/images/Linkedin.svg";
import Medium from "../assets/images/Medium-badge.svg";
import Outlook from "../assets/images/Outlook.svg";
import Resume from "../assets/images/Resume-Green.svg";
import Youtube from "../assets/images/Youtube.svg";

import { Waypoint } from "react-waypoint";
import InViewContext from "../contexts/InViewContext";
import "../styles/Contact.css";

const Contact = () => {
	const [contactInView, setContactInView] = useState(false);

	const handleContactInView = () => {
		setContactInView(!contactInView);
	};
	return (
		<div>
			<hr id="contact"></hr>
			<Container className="contactSection">
				<Waypoint onEnter={handleContactInView} onLeave={handleContactInView} />
				<h1 className="contactHeader">Contact</h1>
				<Col className="contactLogo">
					<a href="https://www.linkedin.com/in/thatpong/">
						<img src={Linkedin} alt="Linkedin" />
					</a>
					<a href="https://github.com/BoomNooB">
						<img src={Github} alt="Github" style={{ filter: "invert(1)" }} />
					</a>
					<a href="https://thatpong.medium.com/">
						<img src={Medium} alt="Medium" style={{ filter: "invert(1)" }} />
					</a>
					<a href="https://www.youtube.com/@boomboza6">
						<img src={Youtube} alt="Youtube" />
					</a>
					<a href="mailto:boomthatpong@gmail.com">
						<img src={Gmail} alt="Gmail" />
					</a>
					<a href="mailto:boom@live.se">
						<img src={Outlook} alt="Outlook" />
					</a>
					<a href="https://www.canva.com/design/DAFcrfUkUdw/WZUZ0jnQgGuqCFsWEHJizw/edit?utm_content=DAFcrfUkUdw">
						<img src={Resume} alt="Outlook" />
					</a>
				</Col>
			</Container>
			<hr></hr>
			<InViewContext.Provider value={contactInView}></InViewContext.Provider>
		</div>
	);
};

export default Contact;
