import React, { useEffect, useState } from "react";
import { Nav, NavDropdown, Navbar, Offcanvas } from "react-bootstrap";
import "../styles/Navbar.css";
const Navigation = () => {
	const [showDrawer, setShowDrawer] = useState(false);
	const [isResponsive, setIsResponsive] = useState(false);

	const handleDrawerToggle = () => {
		setShowDrawer(!showDrawer);
	};

	return (
		<>
			<Navbar expand="lg" fixed="top" className="navbar-custom">
				<Navbar.Brand
					href="#"
					className="myNavbarName position-absolute start-50 translate-middle-x"
				>
					Thatpong
				</Navbar.Brand>
				<Navbar.Toggle
					aria-controls="basic-navbar-nav"
					style={{ marginLeft: "auto" }}
					onClick={handleDrawerToggle}
				/>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						{!isResponsive && (
							<>
								<Nav.Link href="#projects" style={{ marginLeft: "2rem" }}>
									Projects
								</Nav.Link>
							</>
						)}
					</Nav>

					<Nav className="ms-auto">
						{" "}
						{/* Use 'ms-auto' class here */}
						{!isResponsive && (
							<>
								<Nav.Link href="#contact" style={{ marginRight: "2rem" }}>
									Contact
								</Nav.Link>
							</>
						)}
					</Nav>
				</Navbar.Collapse>
			</Navbar>

			<Offcanvas show={showDrawer} onHide={handleDrawerToggle} placement="end">
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>More Options</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<Nav className="flex-column">
						<Nav.Link href="#about">About</Nav.Link>
						<Nav.Link href="#projects">Projects</Nav.Link>
						<Nav.Link href="#contact">Contact</Nav.Link>
					</Nav>
				</Offcanvas.Body>
			</Offcanvas>
		</>
	);
};

export default Navigation;
