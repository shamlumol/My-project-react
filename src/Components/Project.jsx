import React from 'react';
import p1Imgd from '../assets/p1.jpeg';
import p2Imgd from '../assets/p2.jpeg';
import p3Imgd from '../assets/p3.jpeg';
import p4Imgd from '../assets/p4.jpeg';
import p5Imgd from '../assets/p5.jpeg';
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import ProjectCard from './ProjectCard';

const Project = () => {

  const projectsByTab = {
    first: [
      {
        title: "project 1",
        description: "Design & Development",
        imgUrl: p1Imgd,
      },
      {
        title: "project 2",
        description: "Design & Development",
        imgUrl: p4Imgd,
      },
      {
        title: "project 3",
        description: "Design & Development",
        imgUrl: p5Imgd,
      },
    ],
    second: [
      {
        title: "project 4",
        description: "Design & Development",
        imgUrl: p2Imgd,
      },
      {
        title: "project 5",
        description: "Design & Development",
        imgUrl: p3Imgd,
      },
    ],
    third: [
      {
        title: "project 6",
        description: "Design & Development",
        imgUrl: p1Imgd,
      },
    ],
  };

  return (
    <section id="project" className="project-section py-5">
      <div className="container">
        <h1 className="text-center mt-5">Projects</h1>
        <hr
              className="animated-hr mb-5"
              style={{
                border: "2px solid rgb(253, 254, 254)",
                width: "20%",
                margin: "10px auto",
              }}/>
        <Tab.Container id="project-tabs" defaultActiveKey="first">
          <Row>
            <Col sm={12}>
              <Nav variant="pills" className="flex justify-content-center align-items-center mb-5 mt-5">
                <Nav.Item>
                  <Nav.Link  eventKey="first">Web Development</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">UI/UX Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Other Projects</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={12}>
              <Tab.Content>
                {Object.entries(projectsByTab).map(([tabKey, projects]) => (
                  <Tab.Pane key={tabKey} eventKey={tabKey}>
                    <Row>
                      {projects.map((project, index) => (
                        <Col key={index} md={4} className="mb-4">
                          <ProjectCard
                            title={project.title}
                            description={project.description}
                            imgUrl={project.imgUrl}
                          />
                        </Col>
                      ))}
                    </Row>
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </section>
  );
};

export default Project;