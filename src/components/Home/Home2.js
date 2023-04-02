import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  SiLeetcode,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> DISCOVER</span> ME
            </h1>
            <p className="home-about-body">
              Programming has captured my heart and mind, and every day I feel like I've uncovered a new piece of its endless potential. From crafting elegant algorithms to building beautiful user interfaces, I'm continually amazed by what can be achieved through code. While I may never fully master this fascinating world of programming, I'm eager to keep exploring and learning all that I can.
              <br />
              <br />I am fluent in classics like
              I have a solid grasp of languages such as
              <i>
                <b className="purple">  C++, JavaScript, and Java, </b>
              </i>
              and feel confident navigating their complexities.
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">ReactJs Projects </b>
              </i>
              <br />
              <br />
              Whenever possible, I indulge my passion for <b className="purple">Reading</b> and listening to <b className="purple">Music</b>. It's a fulfilling escape from the demands of the world, and a way to explore new perspectives and ideas that inform my work as a developer.

            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Let's Connect</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/utkarshilh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/utkarsh-tripathi-740a391a8/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/utkarshmonger/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>

            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
