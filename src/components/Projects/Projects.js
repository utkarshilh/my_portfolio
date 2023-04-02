import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import notes from "../../Assets/Projects/codeEditor.png";
import proxy from "../../Assets/Projects/proxy.png"
import suicide from "../../Assets/Projects/suicide.png";
import newsapp from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent  <strong className="purple">Creations </strong>
        </h1>
        <p style={{ color: "white" }}>
          I've been working on a number of projects lately, and I'm excited to show you some of my latest work
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proxy}
              isBlog={false}
              title="Proxy"
              description="A Leave Request & Teacher Arrangement System for Computer Science Engineering final year project. Simplify leave requests & manage teacher schedules. Built with React."
              ghLink="https://github.com/utkarshilh/proxy"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={newsapp}
              isBlog={false}
              title="Top Headlines News React App"
              description="Developed a React-based news app that displays top headlines, provides a brief description, and allows users to filter by category. Integrated external API for article content."
              ghLink="https://github.com/utkarshilh/Corrosion-Intel-News-App-"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={notes}
              isBlog={false}
              title="Note Book"
              description="Created a React notebook app allowing user registration, login, and the ability to add, edit, and delete notes. Provides a streamlined solution for organizing notes in one central location."
              ghLink="https://github.com/utkarshilh/ReactProject3"
            // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>





        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
