import React, { Component } from 'react';




class Projects extends Component {
    state = {
        projects: [
            {
                name: 'name',
                repo: 'link',
                deployed: 'link'
            },
            {
                name: 'name2',
                repo: 'link',
                deployed: 'link'
            },
            {
                name: '3',
                repo: 'link',
                deployed: 'link'
            }
        ]

        
    }
    render() {
        return (
            <div>
              <h1>My current work</h1>  
              {this.state.projects.map((project, i) => (
                  <div key={i}><p>{project.name}</p></div>
              ))}
              
            </div>
        );
    }
}

export default Projects;
