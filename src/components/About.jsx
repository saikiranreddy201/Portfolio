import { motion } from "framer-motion";
import React from "react";
import Tilt from "react-parallax-tilt";
import { SaiKiranResume, SuitPhoto } from "../assets";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { slideIn, textVariant } from "../utils/motion";

const ServiceCard = () => {
  return (
    <>
      <div className="flex flex-wrap w-70 m-auto justify-center">
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

        <div className="ml-12 flex flex-col justify-center">
          <div className="flex">
            <motion.p
              className="text-secondary text-[17px] max-w-2xl leading-[32px]"
              variants={slideIn("right", "tween", 0.5, 1)}
            >
              I'm a skilled Undergrad Student with experience in Javascript and
              and strong foundation in frameworks like React.js and Express.js.
              I'm a quick learner and collaborate closely with Team based
              environment to create efficient, scalable, and user-friendly
              solutions. Let's work together to bring your ideas to life!
            </motion.p>
          </div>
          <div className="mt-6 flex items-start justify-start">
            <motion.div
              variants={slideIn("right", "tween", 1, 1)}
            >
              <button className="bg-buttonColor rounded-md py-2.5 px-6 outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-buttonHoverColor hover:rounded-md">
                <a href={SaiKiranResume} download>
                  Download Resume
                </a>
              </button>
            </motion.div>
          </div>
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
