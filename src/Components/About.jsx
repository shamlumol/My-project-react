import React from "react";
import { ChevronDown } from "lucide-react";

const About = () => {
  return (
    <div id="about">
      {/* Down Arrow */}
      <div className="text-center mb-5">
        <ChevronDown
          style={{ color: "white" }}
          size={40}
          className="animation"
        />
      </div>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 text-center mb-5">
            <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>About Me</h1>
            <hr
              className="animated-hr"
              style={{
                border: "2px solid rgb(253, 254, 254)",
                width: "20%",
                margin: "10px auto",
              }}
            />
          </div>

          <div className="col-lg-6 col-md-6 mt-5">
            <p style={{ fontSize: "18px", lineHeight: "1.8" }}>
              I am a full stack developer very passionate about the MEA(R)N Stack
              (MongoDB, Express, Angular, React, and Node.js). With my proficiency in
              front-end and back-end technologies, I build responsive,
              user-friendly web applications. My journey in tech began with a
              curiosity for problem-solving. When I am not coding, I love
              exploring new technologies, contributing to open-source projects,
              and brainstorming my next big idea over a cup of coffee. I always
              look forward to learning, growing, and taking on new challenges in
              the ever-evolving world of web development.
            </p>
          </div>

          <div className="col-lg-6 col-md-6">
            <div className="inform">
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li>
                  <span style={{ fontWeight: "bold" }}>Name: </span>Shamlu Mol A K
                </li>
                <hr />
                <li>
                  <span style={{ fontWeight: "bold" }}>Email: </span>
                  <a
                    className="email"
                    href="mailto:shamlumolakms@gmail.com"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                   shamlumolakms@gmail.com
                  </a>
                </li>
                <hr />
                <li>
                  <span style={{ fontWeight: "bold" }}>Age: </span> 23
                </li>
                <hr />
                <li>
                  <span style={{ fontWeight: "bold" }}>From: </span> Kerala,
                  India
                </li>
              </ul>

              <a
                className="downloadBtn"
                href="./IMAGES/mariajoe Resume.pdf"
                download
            
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;