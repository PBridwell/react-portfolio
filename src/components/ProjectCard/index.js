import React from 'react';
import './style.css';

function ProjectCard(props) {
	return (
		<div className='card'>
			<div className='img-container'>
				<img alt={props.name} src={props.img} />
			</div>
			<div className='content'>
				<div>
					<h3>{props.name}</h3>
					<h4>
						<small>Description:</small> {props.info}
					</h4>
					<h6 className='text-muted'>GitHub Repo: {props.github}</h6>
					<h6 className='text-muted'>Deployed app: {props.deployed}</h6>
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;
