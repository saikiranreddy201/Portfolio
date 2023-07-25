import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { EarthCanvas } from "./canvas";

// This is Template ID: template_dq6x3b8
// This is ServieID: service_30yivea
// This is API key: WTYSHuKTk7gv-m6UB
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    console.log("target::", e.target.value);
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    toast
      .promise(
        emailjs.send(
          "service_30yivea",
          "template_dq6x3b8",
          {
            from_name: form.name,
            to_name: "Sai Kiran Reddy",
            from_email: form.email,
            to_email: "saianactiveindian@gmail.com",
            message: form.message,
          },
          "WTYSHuKTk7gv-m6UB"
        ),
        {
          loading: "Sending mail...",
          success: "Email sent successfully!",
          error: "Failed to send email.",
        }
      )
      .then(
        () => {
          setLoading(false);
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          alert("Something went wrong");
        }
      );
  };

  return (
    <>
      <div className="xl:mt-12 xl:flex-row  flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 rounded-2xl p-8"
        >
          <p className={`${styles.sectionSubText}`}>Get In Touch with me</p>
          <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col" htmlFor="">
              <span className="text-white font-medium">Your Name</span>
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
            <label className="flex flex-col" htmlFor="">
              <span className="text-white font-medium">Your Email</span>
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
            <label className="flex flex-col" htmlFor="">
              <span className="text-white font-medium">Your Message</span>
            </label>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
            <button
              type="submit"
              className="bg-buttonHoverColor rounded-md py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-buttonColor hover:rounded-md "
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[320px]"
        >
          <EarthCanvas />
        </motion.div>
        
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
