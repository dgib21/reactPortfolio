import React from "react";
import Project from "../Project";

function Portfolio() {
	const projects = [
		{
			name: "Gift Fairy",
			description:"Gift Fairy is an application to keep track of a gift wish list. You can sign up to create a wish list and then share that wish list via email to friends or email. You can logout when you are done with your wish list and then sign back in to edit it at any time.",
			image: "giftFairy.png",
			technologies: [
				"HTML/CSS",
				"JavaScript",
				"Node.js",
				"Handlebars.js",
				"Express & Sequelize",
                "Heroku",
                "Node Mail",
			],
			github: "https://github.com/Gift-Fairy/gift-fairy-app",
			deployed: "https://polar-cove-94723.herokuapp.com/",
		},
		{
			name: "Dictionario",
			description:
				"As a group we wanted to provide an aid for students learning something new. We narrowed our focus to students coming from different countries learning English. Our website presents both educational information in the form of definitions, synonyms, and type of while also giving some miscellaneous information in the form of how many books and movies have that word in the Title.",
			image: "dictionario.png",
			technologies: ["HTML/CSS", "JavaScript", "Bulma"],
			github: "https://github.com/Week-Seven-Crew/Dictionario",
			deployed: "https://week-seven-crew.github.io/Dictionario/",
        },
        {
			name: "Note Taker",
			description:"Created an application using Node that users can write and save notes.",
			image: "passwordGenerator.png",
			technologies: ["JavaScript", "HTML/CSS"],
			github: "https://github.com/dgib21/expressJSNoteApp",
			deployed: "https://expressnoteapp.herokuapp.com/notes",
		},
		{
			name: "Budget Tracker",
			description:
				"Application used to track money transactions, used specifically for staying around a budget.                ",
			image: "budgetTracker.png",
			technologies: [
				"JavaScript",
				"MongoDB",
				"IndexedDB & Service Workers",
				"Node.js",
				"Express",
			],
			github: "https://github.com/dgib21/budgetTracker",
			deployed: "https://track-mybudget.herokuapp.com/",
		},
		{
			name: "Weather Dashboard",
			description:
				"A weather dashboard that shows current weather and five-day weather forecast for any city.",
			image: "weatherDashboard.png",
			technologies: ["HTML/CSS", "JavaScript"],
			github: "https://github.com/dgib21/weather-Dashboard",
			deployed: "https://dgib21.github.io/weather-Dashboard/",
		},
		{
			name: "Password Generator",
			description:
				"This was an assignment given by the UT Coding Bootcamp. I was tasked to create an application that an employee can use to generate a random password based on criteria they’ve selected. This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code.",
			image: "passwordGenerator.png",
			technologies: ["JavaScript", "HTML/CSS"],
			github: "https://github.com/dgib21/my_password_generator",
			deployed: "https://dgib21.github.io/my_password_generator/",
        },
        

	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[3]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[4]}></Project>
					</li>
                    <li className="padding">
						<Project projects={projects[5]}></Project>
					</li>
				</ul>
                
			</div>
		</section>
	);
}

export default Portfolio;