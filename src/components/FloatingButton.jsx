import React, { useState, useEffect } from "react";
import FloatingButtons from "react-floating-buttons";
import { Tooltip as ReactTooltip } from "react-tooltip";
import {
  githubIcon,
  instagramIcon,
  linkedinIcon,
  twitterIcon,
} from "../assets";

const FloatingButton = () => {
  const [buttonsList] = useState([
    {
      onClick: () =>
        window.open("https://github.com/saikiranreddy201", "_blank"),
      src: githubIcon,
    },
    {
      onClick: () =>
        window.open(
          "https://www.linkedin.com/in/sai-kiran-reddy-7272b320a/",
          "_blank"
        ),
      src: linkedinIcon,
    },
    {
      onClick: () =>
        window.open("https://www.instagram.com/saikiranreddy.03/", "_blank"),
      src: instagramIcon,
    },
    {
      onClick: () =>
        window.open("https://twitter.com/saikiranreddy75", "_blank"),
      src: twitterIcon,
    },
  ]);
  const [visible, setVisible] = useState(false);

  const listenToScroll = () => {
    let hiddenHeight = 300;
    let scrollHeight =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (scrollHeight > hiddenHeight) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => {
      window.removeEventListener("scroll", listenToScroll);
    };
  }, []);

  return (
    <>
      {visible && (
        <>
          <div
            id="tooltip-div"
            className="rounded-full fixed bottom-4 right-6 z-10 mb-4 mr-4 cursor-pointer text-white p-4"
          >
            <FloatingButtons
              buttonType="plus"
              dimension={50}
              buttonsList={buttonsList}
              top={"calc(50% - 25px)"}
              left={"5%"}
              direction="up"
              backgroundColor={"#342a5e"}
              buttonColor={"#dcd5f5"}
              itemBackgroundColor={"#050816"}
            />
          </div>
          <ReactTooltip
            anchorId="tooltip-div"
            place="left"
            content="Connect with me."
            afterShow={() => setTimeout(ReactTooltip.hide, 2000)}
          />
        </>
      )}
    </>
  );
};

export default FloatingButton;
