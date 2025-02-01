import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Skills = () => {
  const skillItems = [
    { name: "HTML", percentage: 95,  },
    { name: "CSS", percentage: 85, },
    { name: "Bootstrap", percentage: 95, },
    { name: "Tailwind", percentage: 95, },
    { name: "Java Script", percentage: 75,  },
    { name: "React js", percentage: 80,  },
    { name: "Redux", percentage: 80,  },
    { name: "MongoDB", percentage: 75,  },
    { name: "Express js", percentage: 75,  },
    { name: "Angular js", percentage: 75,  },
    { name: "Node JS", percentage: 75,  },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div style={{ maxWidth: "900px", margin: "auto", padding: "20px", marginTop:'10%'}}id="skill">
      <h2 style={{ textAlign: "center", fontWeight:'bold' }}>Skills</h2>
             <hr
              className="animated-hr"
              style={{
                border: "2px solid rgb(253, 254, 254)",
                width: "20%",
                margin: "10px auto",
              }}/>
        <Carousel
        swipeable
        draggable
        showDots
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={2000}
        keyBoardControl
        customTransition="all .5"
        transitionDuration={500}
      >
        {skillItems.map((skill, index) => (
          <div key={index} style={{ textAlign: "center", padding: "10px", marginTop:'30%'}}>
            <div style={{ width: "150px", height: "150px", margin: "0px auto" }}>
              <CircularProgressbar
                value={skill.percentage}
                text={`${skill.percentage}%`}
                styles={buildStyles({
                  textColor: "white",
                  pathColor: `rgb(102, 168, 164 ,${skill.percentage / 100})`,
                    trailColor: "white",
                  textSize: "0.9rem",
                  strokeLinecap: "round",
                })}
              />
            </div>
            <p style={{marginTop: "10px", fontSize: "1.2rem", fontWeight: "bold"}}>
              {skill.name}
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Skills;
