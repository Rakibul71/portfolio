import React from "react";
import SkillsSection from "../Components/SkillsSection";
import Title from "../Components/Title";
import ImageSection from "../Components/ImageSection";
import design from "../img/design.svg";
import intelligence from "../img/intelligence.svg";
import ServicesSection from "../Components/ServicesSection";

const AboutPage = () => {
  return (
    <div className="aboutPage">
      <Title title={"About Me"} span={"About Me"}></Title>
      <ImageSection></ImageSection>
      <Title title={"My Skills"} span={"My Skills"} />
      <div className="skillsContainer">
        <SkillsSection skill={"Javascript"} progress={"75%"} width={"75%"} />
        <SkillsSection skill={"Typescript"} progress={"30%"} width={"30%"} />
        <SkillsSection skill={"React Js"} progress={"70%"} width={"70%"} />
        <SkillsSection skill={"Node Js"} progress={"80%"} width={"80%"} />
        <SkillsSection skill={"Express Js"} progress={"76%"} width={"76%"} />
        <SkillsSection skill={"Html"} progress={"85%"} width={"85%"} />
        <SkillsSection skill={"Css"} progress={"80%"} width={"80%"} />
        <SkillsSection skill={"Mongo DB"} progress={"80%"} width={"80%"} />
        <SkillsSection skill={"Web Design"} progress={"65%"} width={"65%"} />
      </div>

      <Title title={"Services"} span={"Services"} />
      <div className="services-container">
        <ServicesSection
          image={design}
          title={"Front End Development"}
          text={
            "I have good knowledge about Html , Css and Javascript.I am doing few complex front end design .For frond end development I am using React (Famous javascript Library)  "
          }
        />
        <ServicesSection
          image={intelligence}
          title={"Full Stack Development"}
          text={
            "Mainly I am enjoying Full Stack development .I have good knowledge about rest Api and express js,  For data base I am using Mongo Db . "
          }
        />
      </div>
    </div>
  );
};

export default AboutPage;
