import React from 'react'
import { Nav, Container, Col, Row, Tab } from 'react-bootstrap';
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import ProjectCard from './ProjectCard';
import colorSharp2 from "../assets/img/color-sharp2.png";
const Project = () => {
    const projects = [
        {
            title: "Business Startup",
            description: "Design and Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design and Development",
            imgUrl: projImg2,
        },
    ];
  return (
    <section className='project' id='project'>
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam repellendus aspernatur</p> 
              <Tab.Container id="project-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-nav">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {
                      projects.map((projects, index) => {
                        return (
                          <ProjectCard {...projects}
                            key = {index}
                          />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Lorem Ipuse</Tab.Pane>
                <Tab.Pane eventKey="third">Lorem Ipuse</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className='background-image-right' src={colorSharp2} alt='bg-Img'></img>
    </section>
  )
}

export default Project
