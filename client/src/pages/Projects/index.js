import React, { Component } from "react";
import Card from "../../components/ProjectCard";
import projects from "../../projects.json";


class Projects extends Component {
    render() {
        return(
            projects.map(project => (
                <Card
                    id={project.title}
                    title={project.title}
                    liveLink={project.liveLink}
                    viewCode={project.viewCode}
                    image={project.image}
                    description={project.description}
                    technology={project.technology}
                />
            ))
        )
    }
}

export default Projects; 