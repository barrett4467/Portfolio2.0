import React from "react";

function ProjectCard(props) {
  return (
    <div>
      <div>
        <img alt={props.name} src={props.image} />
      </div>
      <div>
        <ul>
          <li>
            <h3>{props.title}</h3>
          </li>
          <li>
            <h3>View App:</h3> {props.liveLink}
          </li>
          <li>
            <h3>View Code:</h3> {props.viewCode}
          </li>
          <li>
            <h3>Image:</h3> {props.image}
          </li>
          <li>
            <h3>Description:</h3> {props.description}
          </li>
          <li>
            <h3>Technology:</h3> {props.technology}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
