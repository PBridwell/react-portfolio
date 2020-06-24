import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
	return (
		<Router>
			<nav className='navbar navbar-expand-lg navbar-light bg-light'>
				<a className='navbar-brand' href='#'>
					Navbar
				</a>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarNav'>
					<ul className='navbar-nav'>
						<li className='nav-item active'>
							<li>
								<Link to='/' className='nav-link'>
									Home
								</Link>
							</li>
						</li>
						<li className='nav-item'>
							<li>
								<Link to='/projects' className='nav-link'>
									Projects
								</Link>
							</li>
						</li>
					</ul>
				</div>
			</nav>

			<Route exact path='/' component={Home} />
			<Route exact path='/projects' component={Projects} />
		</Router>
	);
}

export default App;
