import React from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Sai Kiran Reddy</span>
          </h1>
          <p className={`${styles.heroDownTest} text-yellow-300`}>
            (Unraveling the Secrets of Engineering💡)
          </p>
          <p className={`${styles.heroSubText} text-white-100`}>
            A results-driven, customer-focused, articulate and analytical
            Software Engineer
            <br className="sm:block hidden" />
            who can think out of the box. Strong in MERN stack,Building API's,
            Automation Testing,
            <br className="sm:block hidden" />
            Integration & problem-solving skills with DSA and core CS
            fundamentals.
          </p>
        </div>
      </div>

      {/* <ComputersCanvas /> */}
    </section>
  );
};

export default Hero;
