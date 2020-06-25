import React from 'react';
import './Home.css';

const Home = () => {
	return (
		<div className='container home'>
			<div className='row'>
				<h1>Patrick Bridwell</h1>
			</div>
			<div className='row'>
				<h4>I am a freelancer and student of the Vanderbilt Coding Bootcamp</h4>
			</div>
			<div className='row'>
				<h5>
					You can visit my Github page
					<a href='https://github.com/PBridwell'>here,</a>
					my LinkedIn profile
					<a href='https://www.linkedin.com/in/patrick-bridwell-0a7451133/'>
						here,
					</a>{' '}
					and click on the projects tab to see some of my code.
				</h5>
			</div>
		</div>
	);
};

export default Home;
