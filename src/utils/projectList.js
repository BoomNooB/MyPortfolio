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
		name: "Simple Ticket Management System",

		description: `&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		I created a practice project for a 
		<span className="projectTextHighlightOrange">
		Ticket Management System
		</span>
		using ReactJS for the frontend and Go with the 
		<span className="projectTextHighlightPink">
		Gin-gonic 
		</span>
		framework for the backend, 
		leveraging a
		<span className="projectTextHighlightPink">
		MongoDB 
		</span>
		database. The project focused on implementing basic functionalities such as ticket creation, 
		tracking, and status management through 
		<span className="projectTextHighlightPink">
		GET, POST, and PUT 
		</span>
		methods. 
		I intentionally excluded the DELETE method to prevent accidental ticket deletion, 
		the project served as a valuable learning experience in building a Single-Page Application.

		`,
		techStack: {
			frontEnd: [ReactIcon],
			backEnd: [GoIcon, MongoDBIcon],
			other: null,
		},
		visit: [
			{
				website: "https://ticket-management-go-reactjs.vercel.app",
				linkImage: ScrollNoteIcon,
			},
			{
				website: "https://github.com/BoomNooB/ticket-management-go-reactjs",
				linkImage: GithubIcon,
			},
		],

		images: [TicketGoReact, TicketGoReact2],
	},

	{
		name: "Go: To-Do List API",

		description: `&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		I recently completed a project where I developed the 
		<span className="projectTextHighlightOrange">
		back-end 
		</span>
		side of a web application using 
		<span className="projectTextHighlightOrange">
		Go. 
		</span>
		My primary goal was to implement three essential HTTP request methods: GET, POST, and DELETE. 
		To enhance the security of the application, I chose to integrate 
		<span className="projectTextHighlightOrange">
		JWT 
		</span>

		for authentication and verification purposes.
		And also for efficient routing and handling of these requests, I utilized the powerful 
		<span className="projectTextHighlightPink">
		Gin-gonic 
		</span>
		framework for efficient routing and handling of these requests. For seamless interaction with the database, I integrated the versatile 
		<span className="projectTextHighlightPink">
		GORM 
		</span>

		library.

		To simplify the deployment process, I employed 
		<span className="projectTextHighlightOrange">

		Docker 
		</span>

		to run the MariaDB database. Docker provided an easy and streamlined setup, ensuring smooth integration with the application.
		
		`,
		techStack: {
			frontEnd: null,
			backEnd: [GoIcon, DockerIcon],
			other: null,
		},
		visit: [
			{
				website: "https://github.com/BoomNooB/Go-todo-api",
				linkImage: GithubIcon,
			},
		],

		images: [GoTodoListAPI, GoTodoListAPI],
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

export default projectList;
