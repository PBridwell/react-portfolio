import React from 'react';
import './style.css';

function ProjectCard(props) {
	return (
		<div className='container'>
			<div className='row'>
				<div className='col'>
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
								<h6 className='text-muted'>
									GitHub Repo:<a href='{props.github}'> {props.github}</a>
								</h6>
								<h6 className='text-muted'>
									Deployed app:<a href='{props.deployed}'> {props.deployed}</a>
								</h6>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;
