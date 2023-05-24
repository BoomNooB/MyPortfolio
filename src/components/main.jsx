import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";
import Project from "./Project.jsx";
import ProjectResponsive from "./ProjectResponsive.jsx";
import Test from "./test.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Navbar />
		<About />
		<Project />
		<ProjectResponsive />
		<Contact />
		<Footer />
	</React.StrictMode>
);
