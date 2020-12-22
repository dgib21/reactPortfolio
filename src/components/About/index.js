import React from "react";

function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div className="center">

			<img
					src={require("../../assets/images/profilePic.png")}
					className="photo"
				/>
				
			</div>
			<div>
				<p className="center">
				Family man who loves basketball, beaches, and relaxation.  
				</p>
				<p className="center">
				Learning to be a Software Developer.
				</p>

				<p className="center">
				Will graduate with my coding certificate from the University of Texas in January 2021.
				</p>
			</div>
		</section>
	);
}

export default About;