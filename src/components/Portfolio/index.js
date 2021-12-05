import React from 'react';
import Project from '../Project';

export default function Portfolio() {
	const projects = [
		{
			name: 'Travel Bonanza',
			description:
				'Designed for the adventurous at heart, Travel Bonanza randomly selects an inexpensive destination based on choice of departing/returning airport and selected dates',
			image: '../../assets/images/Screen Shot 2021-12-05 at 2.12.42 PM.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
                'API - Skyscanner, OpenWeather and PredictHQ',
                'Materialize for CSS'
				
			],
			github: 'https://github.com/aeforbush/Project-.git',
			deployed: 'https://bhyland95.github.io/Project1/',
		},
		{
			name: 'Powder Project',
			description:
				'The Powder Project is a CMS style site that helps snow sport enthusiasts determine where to go in Utah for their next winter adventure. Users will be able to find Utah Mountain Resorts, their rating as well as the Powder report for that resort.',
			image: '../../assets/images/Screen Shot 2021-12-05 at 2.17.46 PM.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'Node.js',
				'Handlebars.js',
				'Express & Sequelize',
				'Heroku & AWS S3',
			],
			github: 'https://github.com/aeforbush/the_powder_project.git',
			deployed: 'https://hidden-anchorage-82210.herokuapp.com/',
		},
		{
			name: 'Flash Beats',
			description:
				'A clean and accurate way to search for your favorite songs while also displaying the lyrics.',
			image: 'flash-beats-image.gif',
			technologies: ['HTML/CSS', 'JavaScript', 'jQuery'],
			github: 'https://github.com/OwaisIslam/flash-beats',
			deployed: 'https://teamflash1.github.io/music-app/',
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
			</div>
		</section>
	);
}

