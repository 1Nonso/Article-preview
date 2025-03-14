import profilePicture from "../assets/avatar-michelle.jpg";
import shareButton from "../assets/icon-share.svg";
import { easeOut, motion } from "framer-motion";
import ShareComponentDesktop from "./shareDesktop";
import { useState } from "react";

const BioLarge = () => {
  const [defaultStateMobile, setDefaultStateMobile] = useState(false);

  const changeDefaultValue = () => {
    setDefaultStateMobile(!defaultStateMobile);
  };

  return (
    <>
      <motion.section
        animate={{ y: [500, 0] }}
        transition={{ duration: 1.5 }}
        className="bioLarge flex items-center justify-between w-[100%] lg:w-[100%] px-6 pb-4 text-[#48556a] "
      >
        <img
          className="w-[2.5rem] lg:w-[2rem] rounded-[2rem]"
          src={profilePicture}
          alt=""
        />
        <div className="text-sm relative right-5 lg:text-sm lg:right-11">
          <p className="font-extrabold">Michelle Appleton</p>
          <p>28 Jun 2020</p>
        </div>
        <div>
          <button
            className="shareButton flex justify-center items-center rounded-full w-[2rem] h-[2rem]"
            onClick={() => {
              changeDefaultValue();
            }}
          >
            <img
              className="w-[1rem] relative bottom-[0.1rem]"
              src={shareButton}
              alt=""
            />
          </button>
          {defaultStateMobile ? <ShareComponentDesktop /> : <div></div>}
        </div>
      </motion.section>
    </>
  );
};

export default BioLarge;
