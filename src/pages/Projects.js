import React, { Component } from 'react';
import apps from '../projects.json';
import ProjectCard from '../components/ProjectCard';
import Wrapper from '../components/Wrapper';

class Projects extends Component {
	state = {
		apps,
	};
	render() {
		return (
			<Wrapper>
				<h1>A few of my Projects</h1>
				{this.state.apps.map((app) => (
					<ProjectCard
						id={app.id}
						key={app.id}
						name={app.name}
						image={app.img}
						info={app.info}
						github={app.github}
						deployed={app.deployed}
					/>
				))}
			</Wrapper>
		);
	}
}

export default Projects;
