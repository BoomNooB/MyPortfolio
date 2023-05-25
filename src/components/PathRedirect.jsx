import React from "react";

const PathRedirect = () => {
	// Function to handle the redirects
	const handleRedirect = () => {
		const pathname = window.location.pathname;
		let redirectURL = "";

		switch (pathname) {
			case "/github":
				redirectURL = "https://github.com/boomnoob";
				break;
			case "/linkedin":
				redirectURL = "https://www.linkedin.com/in/thatpong/";
				break;
			default:
				redirectURL = "https://thatpong.com";
				break;
		}

		window.location.href = redirectURL;
	};

	// Check the URL path and perform the redirect
	handleRedirect();

	return (
		<div>
			<h1>PathRedirect</h1>
			{/* Add your content here */}
		</div>
	);
};

export default PathRedirect;
