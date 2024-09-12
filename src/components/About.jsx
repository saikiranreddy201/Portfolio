import { motion } from "framer-motion";
import React from "react";
import Tilt from "react-parallax-tilt";
import {
  SaiKiranResume,
  SuitPhoto,
  githubIcon,
  instagramIcon,
  linkedinIcon,
} from "../assets";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { slideIn, textVariant } from "../utils/motion";

const ServiceCard = () => {
  const handlleInstagramClick = () => {
    window.open("https://www.instagram.com/saikiranreddy.03/", "_blank");
  };

  const handleLinkedinClick = () => {
    window.open(
      "https://www.linkedin.com/in/saikiranreddy201",
      "_blank"
    );
  };
  const handleGithubClick = () => {
    window.open("https://github.com/saikiranreddy201", "_blank");
  };

  return (
    <>
      <div className="flex flex-wrap w-70 m-auto justify-center items-center">
        <Tilt className="xs:w-[250px]">
          <motion.div
            variants={slideIn("left", "tween", 0.5, 1)}
            className="flex flex-row w-full"
          >
            <div
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
              className="rounded-[20px] my-16 "
            >
              <img
                // src={Myphoto}
                src={SuitPhoto}
                alt="title"
                style={{ borderRadius: "100%" }}
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </Tilt>

        <div className="sm:ml-12 flex flex-col justify-center items-center sm:items-start">
          <div className="flex">
            <motion.p
              className="text-secondary text-justify text-[17px] max-w-2xl leading-[32px]"
              variants={slideIn("down", "tween", 0.5, 1)}
            >
              A software Engineer who recently completed his under graduation with a degree in Information Technology from GRIET. Currently working as a Software Engineer at Verisk Analytic, responsible for developing software and programs for use in the organization. Developed applications using MERN stack, tested and deployed myself. Also having good working knowledge in Automation using Selenium c# and developed Rest API's. Also I have a good foundation on DSA and core CS fundamentals.
            </motion.p>
          </div>
          <motion.div variants={slideIn("down", "tween", 0.5, 1)}>
            <div className="mt-6 flex flex-wrap justify-center sm:justify-start">
              <div className="flex flex-col items-center sm:items-start">
                <button className="bg-buttonColor rounded-md py-2.5 px-6 outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-buttonHoverColor hover:rounded-md">
                  <a href={SaiKiranResume} download>
                    Download Resume
                  </a>
                </button>
              </div>
              <div className="flex flex-col items-center sm:ml-5 mt-6 sm:mt-0">
                <div className="flex-row flex">
                  <div className="flex">
                    <img
                      onClick={handleLinkedinClick}
                      src={linkedinIcon}
                      alt="logo"
                      className="w-7 h-7 mt-1.5 object-contain ml-4 cursor-pointer"
                    />
                  </div>
                  <div className="flex">
                    <img
                      onClick={handleGithubClick}
                      src={githubIcon}
                      alt="logo"
                      className="w-8 h-8 mt-1 object-contain ml-4 cursor-pointer"
                    />
                  </div>
                  <div className="flex">
                    <img
                      onClick={handlleInstagramClick}
                      src={instagramIcon}
                      alt="logo"
                      className="w-9 h-9 mt-1 object-contain ml-4 cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Overview.</h2>
      </motion.div>

      <ServiceCard />
    </>
  );
};

export default SectionWrapper(About, "about");
