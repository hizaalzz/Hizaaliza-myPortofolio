import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg4 from "../assets/img/project-img4.jpg";
import projImg3 from "../assets/img/project-img3.jpg";
import projImg5 from "../assets/img/project-img5.jpg";
import projImg6 from "../assets/img/project-img6.jpg";
import projImg7 from "../assets/img/project-img7.jpg";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Lowkerjogja.com",
      description: "Web Development",
      imgUrl: projImg1,
    },
    {
      title: "Point of Sale",
      description: "Web Development",
      imgUrl: projImg2,
    },
    {
        title: "Manajemen Bank Soal",
        description: "Web Development",
        imgUrl: projImg4,
      },
    {
      title: "Pariwisata Indramayu",
      description: "Mobile Development",
      imgUrl: projImg3,
    },
    {
      title: "Testing Website SecondHand",
      description: "Quality Assurance",
      imgUrl: projImg5,
    },
    {
      title: "Bug Reporting Website SecondHand",
      description: "Quality Assurance",
      imgUrl: projImg6,
    },
  ];

  const articles = [
    {
      title: "Ways to Write a good Test Scenario and Test Case",
      description: "Quality Assurance - Article Writing",
      imgUrl: projImg7,
    },
  ];

  const creators = [
    {
      title: "Quality Assurance Fundamentals",
      description: "Content Tech Creator",
      imgUrl: projImg8,
    },
    {
      title: "Type of Testing - Quality Assurance",
      description: "Content Tech Creator",
      imgUrl: projImg9,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Wrap IT Up</h2>
                  <p>
                  I have to WRAP IT UP for several projects, Let's DIVE in
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                      <Row>
                          {articles.map((article, index) => {
                            return <ProjectCard key={index} {...article} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                      <Row>
                          {creators.map((creator, index) => {
                            return <ProjectCard key={index} {...creator} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
