import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { EducationCard } from "./EducationCard";
import { InternCard } from "./InternCard";
import projImg1 from "../assets/img/b_cloud.png";
import projImg2 from "../assets/img/b_storage2.png";
import projImg3 from "../assets/img/b_compute.png";
import projImg4 from "../assets/img/i_android.jpeg";
import projImg5 from "../assets/img/i_web.jpeg";
import projImg6 from "../assets/img/i_smt.jpeg";
import projImg7 from "../assets/img/b_network.png";
import projImg8 from "../assets/img/b_data.png";
import projImg9 from "../assets/img/b_ibm.png";
import projImg10 from "../assets/img/b_ai.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import { Link } from "react-router-dom"; 
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "AWS Educate Introduction to Cloud 101",
      imgUrl: projImg1,
      url1: 'https://www.credly.com/badges/f9089f0a-5d16-456c-999a-f2e4242c25ef/linked_in_profile',
    
    },
    {
      title: "AWS Educate Getting Started with Storage",      
      imgUrl: projImg2,
      url1: 'https://www.credly.com/badges/a87de0c3-0aed-4cd6-b83d-2a98de057af7/linked_in_profile',
      
    },
    {
      title: "AWS Educate Getting Started with Compute", 
      imgUrl: projImg3,
      url1:'https://www.credly.com/badges/118a4807-d2e4-4c41-97cc-37a47b8d3e19/linked_in_profile',
    },
    {
      title: "AWS Educate Getting Started with Networking",
      imgUrl: projImg7,
      url1:'https://www.credly.com/badges/c6d85302-c810-4670-b7a2-d4d4d245cf47/linked_in_profile',
    },
    {
      title: "AWS Educate Getting Started with Databases",
      imgUrl: projImg8,
      url1:'https://www.credly.com/badges/6ca2b3b2-14e3-49b2-b7ce-b178bb81a795/linked_in_profile',
    },
    {
      title: "Python for Data Science",
      imgUrl: projImg9,
      url1:'https://www.credly.com/badges/d2a6e07b-7bab-41e7-92d8-e11149f7bad7/linked_in_profile',
    },
    {
      title: "Introduction to Generative AI",
      imgUrl: projImg10,
      url1:'https://www.cloudskillsboost.google/public_profiles/e60dae19-9420-434b-bf90-7b88f3d49b5c/badges/5647596?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share',
    },
  ];

  const certifications = [
    {
      title: 'Certification Title 1',
      description: "Design & Development",
      imgUrl: projImg1,
      url: 'https://www.linkedin.com/in/priya-s-b15414246',
    },
    {
      title: 'Certification Title 2',
      description: "Design & Development",
      imgUrl: projImg1,
      url: 'https://www.linkedin.com/in/priya-s-b15414246',
    },
    {
      title: 'Certification Title 3',
      description: "Design & Development",
      imgUrl: projImg1,
      url: 'https://www.linkedin.com/in/priya-s-b15414246',
    },
    {
      title: 'Certification Title 4',
      description: "Design & Development",
      imgUrl: projImg1,
      url: 'https://www.linkedin.com/in/priya-s-b15414246',
    },
    {
      title: 'Certification Title 5',
      description: "Design & Development",
      imgUrl: projImg1,
      url: 'https://www.linkedin.com/in/priya-s-b15414246',
    },
    {
      title: 'Certification Title 6',
      description: "Design & Development",
      imgUrl: projImg1,
      url: 'https://www.linkedin.com/in/priya-s-b15414246',
    },
  ];

  const internships = [
    {
      title: 'Android App Development',
      description: 'During my internship, I learned key aspects of Android development:Java/Kotlin basics, Android Studio setup, App components, intents, Services, broadcast receivers, UI design, event handling, SMS, calls, audio, Bluetooth, Storage management.This internship provided me with practical skills and a strong foundation in Android development.',
      imgUrl: projImg4,
      url1: 'https://drive.google.com/file/d/1C8PdxN55Q4ECAjSr-H1sHtk2WkIdWyFg/view?usp=drivesdk',
    },
    {
      title: 'Web Designing',
      description: `Throughout my internship, I gained expertise in web development with AngularJS, HTML, CSS, and JavaScript. I utilized these skills to design the front-end of the company's Transport Management System project, improving both user interface and functionality. This experience deepened my understanding of web technologies and their practical applications in real-world projects.`,
      imgUrl: projImg5,
      url1: 'https://drive.google.com/file/d/1COXJglGYKOuaV8jQ-lMI1WiQ1PBC3J-f/view?usp=drivesdk',
    },
    {
      title: 'SMD Line Production',
      description: 'Throughout the internship, I developed a deep understanding of SMD production processes, including solder paste application, pick-and-place operations, and reflow soldering techniques.Working closely with industry professionals, I gained expertise in operating and maintaining SMD assembly lines, ensuring the efficient production of electronic components.',
      imgUrl: projImg6,
      url1: 'https://drive.google.com/file/d/1CNO7pgZrUQT0PX0jPGjkkfVa-SiuILjk/view?usp=drivesdk',
    },
    
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Credentials</h2>
                <br></br>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-3 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Badges</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Certifications</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Internships</Nav.Link>
                </Nav.Item>
                
              </Nav>
              <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
  <Row>
    {
      certifications.map((certification, index) => {
        return (
          <EducationCard
            key={index}
            {...certification}
          />
        )
      })
    }
  </Row>
</Tab.Pane>

                    <Tab.Pane eventKey="third">
                    <Row>
                    
                          {
                          internships.map((internship, index) => {
                            return (
                              <InternCard
                                key={index}
                                {...internship}
                              />
                            )
                          })
                          }
                        </Row>
              </Tab.Pane>

                  </Tab.Content>
                </Tab.Container>
               
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
