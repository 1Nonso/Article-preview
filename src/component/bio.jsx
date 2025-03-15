import profilePicture from "../assets/avatar-michelle.jpg";
import shareButton from "../assets/icon-share.svg";
import { easeOut, motion } from "framer-motion";

const Bio = ({ changeValue }) => {
  return (
    <>
      <motion.section
        animate={{ x: [-500, 100, 0] }}
        transition={{ ease:easeOut, duration: 1.5 }}
        className="flex items-center justify-between w-[100%] lg:w-[100%] px-6 pb-4 text-[#48556a] "
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
        <button
          className="shareButton flex justify-center items-center rounded-full w-[2rem] h-[2rem]"
          onClick={() => {
            changeValue();
          }}
        >
          <img
            className="w-[1rem] relative bottom-[0.1rem]"
            src={shareButton}
            alt=""
          />
        </button>
      </motion.section>
    </>
  );
};

export default Bio;
