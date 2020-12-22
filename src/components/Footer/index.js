import React from "react";
import gitHubImage from "../../assets/logos/github-logo.png";
import twitterImage from "../../assets/logos/twitter.png";
import linkedInImage from "../../assets/logos/linkedIn.png";



function Footer() {
	return (
		<footer className="footer">
			<div>
				<a
					href="https://github.com/dgib21"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={gitHubImage}
						alt="Github"
						className="logo"
					></img>
				</a>
			</div>
			<div>
				<a
					href="https://www.linkedin.com/in/devin-gibson/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={linkedInImage}
						alt="LinkedIn"
						className="logo"
					></img>
				</a>
			</div>
			<div>
				<a
					href="https://twitter.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={twitterImage}
						alt="Twitter"
						className="logo"
					></img>
				</a>
			</div>
		</footer>
	);
}

export default Footer;