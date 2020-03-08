import React from "react";
import styled from "styled-components";

const Card = styled.section`
  border: 1px black solid;
  width: 25%;
`
const Li = styled.li`
  list-style: none;
`

function ProjectCard(props) {
  return (
    <Card>
      <div>
        <img alt={props.name} src={props.image} />
      </div>
      <div>
        <ul>
          <Li>
            <h3>{props.title}</h3>
          </Li>
          <Li>
            <h3>View App:</h3> {props.liveLink}
          </Li>
          <Li>
            <h3>View Code:</h3> {props.viewCode}
          </Li>
          <Li>
            <h3>Image:</h3> {props.image}
          </Li>
          <Li>
            <h3>Description:</h3> {props.description}
          </Li>
          <Li>
            <h3>Technology:</h3> {props.technology.map(technology => (
              <p>{technology}</p>
            ))}
          </Li>
        </ul>
      </div>
    </Card>
  );
}

export default ProjectCard;
