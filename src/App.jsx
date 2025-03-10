import React from "react";
import img1 from "./img/PurpleDungeonSmallLogoVariantPurple.png";
import logo from "./img/PurpleDungeonVariantPurple2.png";
import "./App.css";
import {
  Container,
  Row,
  Col,
  Image,
  Card,
  Button,
  ButtonGroup,
  Popover,
  OverlayTrigger,
  ToastContainer,
  Toast,
} from "react-bootstrap";
//import purpleProjects from "./purpleProjects.json.js";
import personalProjects from "./personalProjects.json";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Image
          style={{ maxWidth: "100%" }}
          src={logo}
          className="App-logo"
          alt="logo"
        />
        <ToastContainer className="p-3 position-relative" position="top-end">
          <Toast bg="dark">
            <Toast.Header closeButton={false} style={{ color: "#1c1c1d" }}>
              <strong className="me-auto">Purple Dungeon</strong>
              <small>just now</small>
            </Toast.Header>
            <Toast.Body style={{ color: "#ccb4d6" }}>Hiii, this website is still a WIP, so if you notice something strange don't worry, i will fix it later!</Toast.Body>
          </Toast>
        </ToastContainer>
      </header>
      <div className="App-screen-black d-flex align-items-center justify-content-center">
        <Container fluid>
          <Row className="d-flex align-items-center justify-content-center">
            <Col sm={12} md={12} lg={6} xl={6} xxl={6}>
              <Image
                style={{ maxWidth: "100%" }}
                className="rounded"
                src={img1}
                alt="img1"
              ></Image>
            </Col>
            <Col className="px-5" sm={12} md={12} lg={5} xl={5} xxl={5}>
              <h2> What is Purple Dungeon? </h2>
              <p className="text-center">
                Purple Dungeon is an immaginary game studio made by Simone
                Bergonzi (aka MurasakiSimema). This studio is a place created
                to collect some of his personal project.
              </p>
              <h2 className="mt-4"> Who is Simone Bergonzi? </h2>
              <p className="text-center">
                Simone Bergonzi is a 23 yo developer from Italy. He is currently
                working in a local company as a Software Architect. 
                His dream is to create a memorable RPG Game. 
                His main programming languages are C# and Javascript/Typescript.
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <a className="cta text-center" href="/simoneBergonzi">
                  <span>More About Simone</span>
                  <span>
                    <svg
                      width="60px"
                      height="3vh"
                      viewBox="0 0 66 43"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="#1c1c1d" fillRule="evenodd">
                        <path
                          className="one"
                          d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                          fill="#1c1c1d"
                        ></path>
                        <path
                          className="two"
                          d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                          fill="#1c1c1d"
                        ></path>
                        <path
                          className="three"
                          d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                          fill="#1c1c1d"
                        ></path>
                      </g>
                    </svg>
                  </span>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/*<div className="App-screen-black d-flex align-items-center justify-content-center">
        <Container fluid>
          <h1>Purple Dungeon Projects</h1>
          <Row className="mt-5 d-flex justify-content-center">
            {purpleProjects.map((project) => (
              <Col
                key={project.id}
                sm={12}
                md={6}
                lg={4}
                xl={4}
                xxl={4}
                className="mb-3 d-flex justify-content-center"
              >
                <Card
                  style={{
                    width: "95%",
                    color: "#1c1c1d",
                    backgroundColor: "#ccb4d6",
                  }}
                >
                  <Card.Img
                    style={{ aspectRatio: 16 / 9 }}
                    variant="top"
                    src={project.src}
                    alt={project.name}
                  />
                  <Card.Body>
                    <Card.Title>{project.name}</Card.Title>
                    <Card.Text>{project.caption}</Card.Text>
                  </Card.Body>
                  <Card.Body>
                    <ButtonGroup aria-label="Basic example">
                      <Button
                        variant="dark"
                        target="_blank"
                        href={project.gitHub}
                      >
                        GitHub
                      </Button>
                      {!!project.link && project.link !== "" ? (
                        <Button variant="outline-dark" href={project.link}>
                          Page
                        </Button>
                      ) : (
                        <OverlayTrigger
                          placement="top"
                          overlay={
                            <Popover
                              style={{
                                color: "#ccb4d6",
                                backgroundColor: "#1c1c1d",
                              }}
                            >
                              <Popover.Header
                                style={{
                                  backgroundColor: "#745494",
                                  color: "#1c1c1d",
                                }}
                              >
                                <img
                                  src="holder.js/20x20?text=%20"
                                  className="rounded me-2"
                                  alt=""
                                />
                                <strong className="me-auto">
                                  {project.name}
                                </strong>
                              </Popover.Header>
                              <Popover.Body style={{ color: "#ccb4d6" }}>
                                {project.details}
                              </Popover.Body>
                            </Popover>
                          }
                        >
                          <Button variant="outline-dark">Details</Button>
                        </OverlayTrigger>
                      )}
                    </ButtonGroup>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>*/}
      <div className="App-screen-black d-flex align-items-center justify-content-center">
        <Container fluid>
          <h1>Some Projects</h1>
          <Row className="mt-5 d-flex justify-content-center">
            {personalProjects.map((project) => (
              <Col
                key={project.id}
                sm={12}
                md={6}
                lg={4}
                xl={4}
                xxl={4}
                className="mb-3 d-flex justify-content-center"
              >
                <Card
                  style={{
                    width: "95%",
                    color: "#1c1c1d",
                    backgroundColor: "#ccb4d6",
                  }}
                >
                  <Card.Img
                    style={{ aspectRatio: 16 / 9 }}
                    variant="top"
                    src={project.src}
                    alt={project.name}
                  />
                  <Card.Body>
                    <Card.Title>{project.name}</Card.Title>
                    <Card.Text>{project.caption}</Card.Text>
                  </Card.Body>
                  <Card.Body>
                    <ButtonGroup aria-label="Basic example">
                      <Button
                        variant="dark"
                        target="_blank"
                        href={project.gitHub}
                      >
                        GitHub
                      </Button>
                      {!!project.link && project.link !== "" ? (
                        <Button variant="outline-dark" href={project.link}>
                          Page
                        </Button>
                      ) : (
                        <OverlayTrigger
                          placement="top"
                          overlay={
                            <Popover
                              style={{
                                color: "#ccb4d6",
                                backgroundColor: "#1c1c1d",
                              }}
                            >
                              <Popover.Header
                                style={{
                                  backgroundColor: "#745494",
                                  color: "#1c1c1d",
                                }}
                              >
                                <img
                                  src="holder.js/20x20?text=%20"
                                  className="rounded me-2"
                                  alt=""
                                />
                                <strong className="me-auto">
                                  {project.name}
                                </strong>
                              </Popover.Header>
                              <Popover.Body style={{ color: "#ccb4d6" }}>
                                {project.details}
                              </Popover.Body>
                            </Popover>
                          }
                        >
                          <Button variant="outline-dark">Details</Button>
                        </OverlayTrigger>
                      )}
                    </ButtonGroup>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;

//TODO:
//use a toast (maybe when there isn't enought information use a toast anc not a page)
//more personal info (a new page? a toast? an offcanvas? a popover?)
